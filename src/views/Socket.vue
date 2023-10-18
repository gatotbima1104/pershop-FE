<script setup>
import io from "socket.io-client";
import { reactive, ref } from "vue";
import { Howl } from "howler";
import alarmSound from "../assets/alarm/mixkit-city-alert-siren-loop-1008.wav"; // INITIATE SOUND ALARM

// const socket = io("http://localhost:3000");
const chat = reactive({
  message: "",
  sender: "",
  receivedMessage: "",
  alarmTimeout: 0,
});

// const alarm = ref(0)
// const setAlarm = () => {
//   const timeout = chat.alarmTimeout;
//   console.log('Sending data to server:', timeout);
//   socket.emit('setAlarm', { timeout: timeout });
// };

// SET ALARM WITH HOWLER
const alarm = new Howl({
  src: [alarmSound],
  loop: true,
  volume: 0.5,
});

const setAlarm = () => {
  const timeout = chat.alarmTimeout * 1000;

  console.log("setting alarm for " + timeout + " seconds");

  setTimeout(() => {
    console.log("alarm triggred");
    alarm.play();
  }, timeout);
};

const stopAlarm = () => {
  console.log("alarm stopped");
  alarm.stop();
};

</script>
<template>
  <div
    class="h-screen bg-slate-200 flex justify-center items-center flex-col gap-5"
  >
    <h1>Socket Website</h1>

    <div class="gap-5 flex">
      <input
        v-model="chat.sender"
        type="text"
        placeholder="Your Name"
        class="rounded"
      />
      <input v-model="chat.message" type="text" class="rounded" />
      <button @click="sendMessage" class="bg-blue-400 text-white p-2 rounded">
        Chat
      </button>
    </div>

    <div>
      <div v-for="message in chat.receivedMessage" :key="message.text">
        <strong>{{ message.sender }}:</strong> {{ message.text }}
      </div>
    </div>

    <div
      class="h-screen bg-slate-200 flex justify-center items-center flex-col gap-5"
    >
      <h1>Socket Website</h1>

      <div class="gap-5 flex mb-5">
        <input
          v-model="chat.sender"
          type="text"
          placeholder="Your Name"
          class="rounded"
        />
        <input
          v-model="chat.message"
          type="text"
          placeholder="Message"
          class="rounded"
        />
        <button @click="sendMessage" class="bg-blue-400 text-white p-2 rounded">
          Send Message
        </button>
      </div>

      <h3>Set alarm</h3>
      <div class="gap-5 flex">
        <input
          v-model="chat.alarmTimeout"
          type="number"
          placeholder="Alarm Timeout (seconds)"
          class="rounded"
        />
        <button @click="setAlarm" class="bg-green-400 text-white p-2 rounded">
          Set Alarm
        </button>
        <button @click="stopAlarm" class="bg-red-400 text-white p-2 rounded">
          Stop
        </button>
      </div>

      <div>
        <div v-for="(message, index) in chat.receivedMessages" :key="index">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
    </div>
  </div>
</template>
