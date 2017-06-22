<template>
  <div class="md-datepicker">
    <md-icon @click.native="openPicker">event</md-icon>

    <md-input
      type="date"
      v-model="modelDate"
      :id="id"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus.native="openOnFocus"
      @input.native="changeValue"
      ref="pickerInput" />

    <div class="md-datepicker-popup" :class="[themeClass, classes]" :style="styles" ref="pickerElement">
      <div class="md-datepicker-header">
        <span class="md-datepicker-year-select" @click="showYearPicker">{{ selectedDate.getFullYear() }}</span>
        <div class="md-datepicker-date-select" @click="showDatePicker">
          <strong class="md-datepicker-dayname">{{ locale.shortDays[selectedDate.getDay()] }},</strong>
          <strong class="md-datepicker-monthname">{{ locale.shortMonths[selectedDate.getMonth()] }}</strong>
          <strong class="md-datepicker-day">{{ selectedDate.getDate() }}</strong>
        </div>
      </div>

      <div class="md-datepicker-body">
        <div class="md-datepicker-calendar" v-show="currentView === 'date'">
          <div class="md-datepicker-controls">
            <button class="md-button md-icon-button" @click="previousMonth">
              <md-icon>keyboard_arrow_left</md-icon>
            </button>

            <button class="md-button md-icon-button" @click="nextMonth">
              <md-icon>keyboard_arrow_right</md-icon>
            </button>
          </div>

          <transition-group tag="div" name="slide-month" appear class="md-calendar-container" :class="{ 'md-previous': lastAction === 'previous', 'md-next': lastAction === 'next' }">
            <div class="md-datepicker-month" v-for="month in [currentDate]" :key="month">
              <md-button class="md-current-date" @click.native="showMonthPicker">{{ locale.months[month.getMonth()] }} {{ month.getFullYear() }}</md-button>

              <div class="md-datepicker-week-days">
                <span v-for="day in locale.shorterDays" v-once>{{ day }}</span>
              </div>

              <div class="md-datepicker-days">
                <span class="md-empty" v-for="day in startOfMonth(month).getDay()" v-once></span>

                <button
                  class="md-button md-icon-button"
                  v-for="day in getDaysInMonth(month)"
                  :key="day"
                  :class="{
                    'md-current': isToday(day),
                    'md-selected': isSelectedDay(day)
                  }"
                  @click="setDate(day)">
                  {{ day }}
                </button>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="md-datepicker-years" v-show="currentView === 'year'">
          <button
            class="md-button md-dense md-datepicker-year"
            v-for="year in visibleYears()"
            :key="year"
            :class="[
              {
                'md-current': isThisYear(year),
                'md-selected': isSelectedYear(year),
              },
              'data-' + year
            ]"
            @click="setYear(year)">
            {{ year }}
          </button>
        </div>

        <div class="md-datepicker-months" v-show="currentView === 'month'">
          <button
            class="md-button md-dense md-datepicker-month"
            v-for="(month, index) in locale.months"
            :key="month"
            :class="{
              'md-current': isThisMonth(index),
              'md-selected': isSelectedMonth(index),
            }"
            @click="setMonth(index)">
            {{ month }}
          </button>
        </div>

        <div class="md-datepicker-actions md-dialog-actions">
          <md-button @click.native="closePicker">Cancel</md-button>
          <md-button class="md-primary" @click.native="closePicker">Ok</md-button>
        </div>
      </div>
    </div>

    <md-backdrop class="md-datepicker-backdrop" :class="classes" @close="closePicker" ref="pickerBackdrop" />
  </div>
</template>

<style lang="scss" src="./mdDatePicker.scss">
</style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import getInViewPosition from '../../core/utils/getInViewPosition';
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import formatDate from 'date-fns/format';
  import parseDate from 'date-fns/parse';
  import startOfMonth from 'date-fns/start_of_month';
  import addMonths from 'date-fns/add_months';
  import getDaysInMonth from 'date-fns/get_days_in_month';
  import setDate from 'date-fns/set_date';
  import setMonth from 'date-fns/set_month';
  import setYear from 'date-fns/set_year';
  import isToday from 'date-fns/is_today';
  import isSameDay from 'date-fns/is_same_day';
  import isThisMonth from 'date-fns/is_this_month';
  import isThisYear from 'date-fns/is_this_year';
  import isBefore from 'date-fns/is_before';
  import isValidDate from 'date-fns/is_valid';

  export default {
    props: {
      value: [String, Date],
      id: String,
      name: String,
      disabled: {
        type: Boolean,
        default: false
      },
      required: Boolean,
      placeholder: String,
      mdOpenOnFocus: Boolean
    },
    mixins: [theme],
    data() {
      return {
        rootElement: null,
        pickerElement: null,
        backdropElement: null,
        pickerPosition: {
          top: '0px',
          left: '0px'
        },
        active: false,
        visibleYears() {
          let years = [];
          let startYear = this.locale.startYear;

          while (startYear <= this.locale.endYear) {
            years.push(startYear++);
          }

          return years;
        },
        modelDate: this.value,
        currentDate: isValidDate(this.value) ? parseDate(this.value) : Date.now(),
        selectedDate: isValidDate(this.value) ? parseDate(this.value) : Date.now(),
        createdMonths: [
          addMonths(this.value, -1),
          this.value,
          addMonths(this.value, 1)
        ],
        currentView: 'date',
        lastAction: null
      };
    },
    computed: {
      classes() {
        return {
          'md-active': this.active,
          'md-select-date': this.currentView === 'date',
          'md-select-month': this.currentView === 'month',
          'md-select-year': this.currentView === 'year'
        };
      },
      styles() {
        return {
          top: this.pickerPosition.top,
          left: this.pickerPosition.left
        };
      },
      locale() {
        return this.$material.locale;
      }
    },
    watch: {
      selectedDate(selected) {
        this.modelDate = formatDate(selected, this.locale.dateFormat);
      }
    },
    methods: {
      startOfMonth(month) {
        return startOfMonth(month);
      },
      getDaysInMonth(month) {
        return getDaysInMonth(month);
      },
      isThisMonth(month) {
        return isThisMonth(setMonth(new Date(), month));
      },
      isThisYear(year) {
        return isThisYear(setYear(new Date(), year));
      },
      isToday(day) {
        return isToday(setDate(this.currentDate, day));
      },
      isSelectedDay(day) {
        return isSameDay(this.selectedDate, setDate(this.selectedDate, day));
      },
      isSelectedMonth(month) {
        return isSameDay(this.selectedDate, setMonth(this.selectedDate, month));
      },
      isSelectedYear(year) {
        return isSameDay(this.selectedDate, setYear(this.selectedDate, year));
      },
      setYear(year) {
        this.setModelValue(setYear(this.currentDate, year));
      },
      setDate(day) {
        this.setModelValue(setDate(this.currentDate, day));
      },
      setMonth(month) {
        this.setModelValue(setMonth(this.currentDate, month));
      },
      setModelValue(date) {
        this.selectedDate = date;
        this.$emit('input', date);
      },
      changeValue() {
        const newDate = parseDate(this.$refs.pickerInput.$el.value);

        this.lastAction = null;
        this.setModelValue(isValidDate(newDate) ? newDate : this.selectedDate);
      },
      openOnFocus() {
        if (this.mdOpenOnFocus) {
          this.openPicker();
        }
      },
      calculatePopupPosition() {
        window.requestAnimationFrame(() => {
          const inputContainerRect = this.parentContainer.$el.getBoundingClientRect();
          let position = {};

          position.top = inputContainerRect.top + this.parentContainer.$el.offsetHeight;
          position.left = inputContainerRect.left;

          position = getInViewPosition(this.pickerElement, position);

          this.pickerPosition.top = position.top + window.pageYOffset + 'px';
          this.pickerPosition.left = position.left + window.pageXOffset + 'px';
        });
      },
      openPicker() {
        window.addEventListener('resize', this.calculatePopupPosition);
        this.calculatePopupPosition();
        this.rootElement.appendChild(this.pickerElement);
        this.rootElement.appendChild(this.backdropElement);
        getComputedStyle(this.pickerElement).top;
        getComputedStyle(this.backdropElement).top;
        this.active = true;
        this.currentDate = parseDate(this.value);
        this.selectedDate = parseDate(this.value);
      },
      closePicker() {
        const cleanUp = () => {
          this.pickerElement.removeEventListener(transitionEndEventName, cleanUp);
          this.rootElement.removeChild(this.pickerElement);
          this.rootElement.removeChild(this.backdropElement);
          this.currentDate = new Date();
        };

        window.removeEventListener('resize', this.calculatePopupPosition);
        this.pickerElement.removeEventListener(transitionEndEventName, cleanUp);
        this.pickerElement.addEventListener(transitionEndEventName, cleanUp);
        this.showDatePicker();
        this.active = false;
      },
      setLastAction() {
        if (!isThisMonth(this.currentDate, this.selectedDate)) {
          if (isBefore(this.currentDate, this.selectedDate)) {
            this.lastAction = 'next';
          } else {
            this.lastAction = 'previous';
          }
        } else {
          this.lastAction = null;
        }
      },
      showDatePicker() {
        this.setLastAction();

        this.$nextTick(() => {
          this.currentView = 'date';
          this.currentDate = this.selectedDate;
        });
      },
      showYearPicker() {
        this.lastAction = null;
        this.currentView = 'year';
        this.currentDate = this.selectedDate;

        this.$nextTick(() => {
          this.pickerElement.querySelector(`.data-${this.selectedDate.getFullYear()}`).scrollIntoViewIfNeeded(true);
        });
      },
      showMonthPicker() {
        this.lastAction = null;
        this.currentView = 'month';
        this.currentDate = this.selectedDate;
      },
      previousMonth() {
        this.currentDate = addMonths(this.currentDate, -1);
        this.lastAction = 'previous';
      },
      nextMonth() {
        this.currentDate = addMonths(this.currentDate, 1);
        this.lastAction = 'next';
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');
        this.pickerElement = this.$refs.pickerElement;
        this.backdropElement = this.$refs.pickerBackdrop.$el;
        this.pickerElement.parentNode.removeChild(this.pickerElement);
        this.backdropElement.parentNode.removeChild(this.backdropElement);
        this.setModelValue(this.currentDate);
      });
    },
    beforeDestroy() {

    }
  };
</script>
