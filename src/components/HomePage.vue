<script setup>
  import {onMounted, ref} from "vue";
  import {useRoute} from "vue-router";
  import Accordion from 'primevue/accordion';
  import AccordionPanel from 'primevue/accordionpanel';
  import AccordionHeader from 'primevue/accordionheader';
  import AccordionContent from 'primevue/accordioncontent';
  import {Button} from "primevue";
  import ScrollPanel from 'primevue/scrollpanel';
  import Dialog from "primevue/dialog";
  import {Calendar} from "primevue";
  import InputNumber from "primevue/inputnumber";
  import 'primeicons/primeicons.css'
  import {Toast} from "primevue";
  import {useToast} from "primevue/usetoast";
  const toast = useToast()


  const userName = ref('')
  const showDialog = ref(false)
  const date = ref('')
  const startTime = ref('')
  const endTime = ref('')
  const pause = ref('')
  const workD = ref([])
  const workDaysGrouped = ref([])

  onMounted(() => {
    const route = useRoute()
    userName.value = route.params.userName
    let workDayList = JSON.parse(localStorage.getItem(userName.value))
    if (workDayList) {
      workD.value = workDayList
    }
    workDaysGrouped.value = groupByDate(workD.value)

  })

  function addNewWorkDay() {
    showDialog.value = true
  }

  function formatedDate() {
    if (!date.value) return
    const selectedDate = date.value
    const day = String(selectedDate.getDate()).padStart(2, '0')
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0')
    const year = selectedDate.getFullYear()

    return [day, month, year]
  }

  function formatedTime(selectedTime) {
    if (!selectedTime.value) return
    const time = selectedTime.value
    const hours = String(time.getHours()).padStart(2, '0')
    const minutes = String(time.getMinutes()).padStart(2, '0')

    return [hours, minutes]
  }

  function saveWorkDay() {
    const [day, month, year] = formatedDate()? formatedDate(): []
    const [sHours, sMinutes] = formatedTime(startTime)? formatedTime(startTime): []
    const [eHours, eMinutes] = formatedTime(endTime)? formatedTime(endTime): []
    let pau = pause.value
    if (pau === '') pau = '00'

    if (!day === undefined 
        || !month === undefined 
        || !year === undefined 
        || !sHours === undefined 
        || !sMinutes === undefined 
        || !eHours === undefined 
        || eMinutes === undefined 
        || pau === undefined) return

    const datumVal = day + '.' + month + '.' + year
    const startTimeVal = sHours + ':' + sMinutes
    const endTimeVal = eHours + ':' + eMinutes

    const existingWork = workD.value.some(item => item.datum === datumVal)

    if (existingWork) {
      toast.add({severity: 'info', summary: 'Info', detail: 'Das Datum existiert schon', life: 3000 })
      return
    }

    workD.value.push(
      {datum: datumVal,
       startTime: startTimeVal,
       endTime: endTimeVal,
       pause: pau, 
       totalWorkTime: calculateWorkHours(startTimeVal, endTimeVal, pau)})
    localStorage.setItem(userName.value, JSON.stringify(workD.value))
    workDaysGrouped.value = groupByDate(workD.value)
    showDialog.value = false

  }

  function groupByDate(workDayList) {
    if (workDayList.length === 0) return
    const workDayGroups = {}
    for (let i = 0; i < workDayList.length; i++) {
      const workDay = workDayList[i]
      const datum = workDay.datum
      if (!workDayGroups[headerFormatedDate(datum)]) {
        workDayGroups[headerFormatedDate(datum)] = []
      }
      workDayGroups[headerFormatedDate(datum)].push(workDay)
    }
    return workDayGroups
  }

  function headerFormatedDate(date) {
    const splitDate = date.split('.')
    return `${splitDate[1]}.${splitDate[2]}`;
  }

  function calculateWorkHours(startTime, endTime, pause) {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const startTotalMinutes = startHours * 60 + startMinutes
    const endTotalMinutes = endHours * 60 + endMinutes

    let totalMinutesWorked = endTotalMinutes - startTotalMinutes

    totalMinutesWorked -= pause

    if (totalMinutesWorked < 0) {
      totalMinutesWorked += 24 * 60
    }

    const hours = Math.floor(totalMinutesWorked / 60)
    const minutes = totalMinutesWorked % 60

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  function deleteWorkDay(datumVal) {
    workD.value = workD.value.filter(item => item.datum !== datumVal);
    workD.value = [...workD.value]
    localStorage.setItem(userName.value, JSON.stringify(workD.value))
    workDaysGrouped.value = groupByDate(workD.value)
  }

  function calculateTotalWorkedHoursInMonth(workMoth) {
    const item = JSON.parse(JSON.stringify(workMoth))   
    let totalHoursMin = 0

    for (let i = 0; i < item.length; i++) {
      const [stunden, minuten] = item[i].totalWorkTime.split(':').map(Number)
      totalHoursMin += stunden * 60;
      totalHoursMin += minuten

    }
    const h = Math.floor(totalHoursMin / 60)
    const m = totalHoursMin % 60
   return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  }

</script>

<template>
  <div class="title">
    <h3> {{ userName }} </h3>
    <hr class="divider">
  </div>
  <Dialog class="dialog-font" header="Zeitplanung" v-model:visible="showDialog" :modal="true" :closable="true" :style="{ width: '250px', fontFamily: 'sans-serif' }">
    <div class="field">
      <label class="dialog-font" for="date">Datum</label>
      <Calendar id="date" v-model="date" dateFormat="dd.mm.yy" showIcon />
    </div>

    <div class="field">
      <label class="dialog-font" for="startTime">Startzeit</label>
      <Calendar id="startTime" v-model="startTime" timeOnly hourFormat="24" icon="pi pi-clock" show-icon/>
    </div>

    <div class="field">
      <label class="dialog-font" for="endTime">Endzeit</label>
      <Calendar id="endTime" v-model="endTime" timeOnly hourFormat="24" icon="pi pi-clock" showIcon />
    </div>

    <div class="field">
      <label class="dialog-font" for="pause">Pause (Minuten)</label>
      <InputNumber id="pause" v-model="pause" :min="0" placeholder="0" />
    </div>

    <div class="dialog-footer">
      <Toast position="top-center" style="width: 80%;"/>
      <Button class="save_button" label="Speichern"  @click="saveWorkDay" />
      <Button label="Abbrechen" @click="visible = false" class="p-button-text" />
    </div>
  </Dialog>
  <ScrollPanel class="container">
    <div class="spacer"></div>
    <div class="card accordion_container">
      <Accordion class="accordion_body" value="0">
        <AccordionPanel
            v-for="(workDay, date) in workDaysGrouped"
            :key="date"
            :value="date"
        >
          <AccordionHeader>{{date}}</AccordionHeader>
          <AccordionContent
              v-for="(object, index) in workDay"
              :key="index"
              style="padding: 0.1px !important;"
          >
            <div class="accordion-content">
              <span class="m-0">
                {{object.datum}}
              </span>
              <span class="m-0">
                {{object.startTime}}
              </span>
              <span class="m-0">
                {{object.endTime}}
              </span>
              <span class="m-0">

                {{object.pause}}
              </span>
              <span class="m-0">
                {{object.totalWorkTime}}
              </span>
              <span @click="deleteWorkDay(object.datum)" class="pi pi-trash delete-icon" style="width: 20px;"></span>
            </div>
            <hr style="width: 92%">
          </AccordionContent>
          <div>
            <span class="gesamte_st">Gesamte St. </span>
            <span  class="gesamte_st_val">{{ calculateTotalWorkedHoursInMonth(workDay) }}</span>
          </div>
          
        </AccordionPanel>
      </Accordion>

    </div>
    <div class="spacer-bottom"></div>
    <div class="button-container">
      <Button @click="addNewWorkDay" label="add" class="add_button" />
    </div>
  </ScrollPanel>
</template>

<style scoped>
  .title {
    position: fixed;
    background-color: white;
    z-index: 1000;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .spacer {
    height: 5rem;
  }
  .container {
    height: 45rem;
  }
  .accordion_container {
    display: flex;
    justify-self: center;
  }
  .accordion_body {
    width: 22rem;
  }
  .divider {
    width: 22rem;
    justify-self: center;
    border-width: 0.1rem;
    border-color: #494848;
  }

  .add_button {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5rem;
    width: 10rem;
    color: black;
    background-color: #6DB6D9 !important;
  }
  .add_button:hover {
    background-color: #2ca3dc !important;
  }
  .spacer-bottom {
    height: 20rem;
  }
  .field {
    margin-bottom: 1rem;
  }
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  .save_button {
    color: black;
    background-color: #6DB6D9 !important;
  }
  .p-button-text {
    color: black;
  }
  .p-button-text:hover {
    color: black;
  }
  .p-datepicker-header {
    width: 200px !important;
  }
  .dialog-font {
    font-family: sans-serif;
  }
  .accordion-content {
    display: inline-flex;
    gap: 1rem;
    font-size: 15px;
  }
  .delete-icon {
    color: red
  }
  .gesamte_st {
    font-family: sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .gesamte_st_val {
    font-family: sans-serif;
    color: #1ba577 !important;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: bold;
  }

</style>
