<script>
import io from "socket.io-client";
let socket = io();
let id = 0;

export default {
  data() {
    return {
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
    };
  },
  created() {
    window.onbeforeunload = () => {
      socket.emit("leave", this.username);
    };

    socket.on("chat-message", (data) => {
      this.messages.push({
        message: data.message,
        type: 1,
        user: data.user,
      });
    });
    socket.on("typing", (data) => {
      this.typing = data;
    });
    socket.on("stopTyping", () => {
      this.typing = false;
    });
    socket.on("joined", (data) => {
      this.info.push({
        username: data,
        type: "joined",
      });
      setTimeout(() => {
        this.info = [];
      }, 5000);
    });
    socket.on("leave", (data) => {
      this.info.push({
        username: data,
        type: "left",
      });
      setTimeout(() => {
        this.info = [];
      }, 5000);
    });
    socket.on("connections", (data) => {
      this.connections = data;
    });
  },
  watch: {
    newMessage(value) {
      value ? socket.emit("typing", this.username) : socket.emit("stopTyping");
    },
  },
  methods: {
    send() {
      this.messages.push({
        message: this.newMessage,
        type: 0,
        user: "Me",
      });
      socket.emit("chat-message", {
        message: this.newMessage,
        user: this.username,
      });
      this.newMessage = null;
    },
    addUser() {
      this.ready = true;
      socket.emit("joined", this.username);
    },
  },
};
</script>

<template>
  <section class="chat__page">
    <div class="chat__header">
      <div class="chat__avatar-status status">
        <img
          src="../assets/avatar-img.png"
          alt=""
          class="chat__avatar avatar"
        />
      </div>
      <div class="chat__wrap">
        <h3 class="chat__user-name">Rick Sanchez</h3>
        <span class="chat__user-status">online</span>
      </div>
      <button class="chat__call"></button>
    </div>
    <div class="chat__body body">
      <div class="body__container">
        <ul class="body__list">
          <li
            v-for="(message, index) in messages"
            :key="index"
            class="body__item"
          >
            <img
              src="../assets/avatar-img.png"
              alt=""
              class="body__img avatar"
            />
            <div class="body__wrapp">
              <div class="body__inner">
                <p class="body__user-name">{{ message.user }}</p>
                <span class="user-time">{{ new Date().toLocaleString() }}</span>
              </div>
              <div class="body__message">
                <p class="body__message-text">{{ message.message }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat__write-container">
      <textarea
        v-model="newMessage"
        class="chat__input"
        placeholder="Write something..."
      ></textarea>
      <button class="chat__btn" @click="send">Send</button>
    </div>
  </section>
</template>

<style scoped>
.chat__page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100vh;
  overflow: overlay;
}
.chat__header {
  display: flex;
  flex-direction: row;
  position: sticky;
  align-items: center;
  background: #fff;
  gap: 10px;
  top: 0;
  z-index: 100;
  padding: 10px 25px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.21);
}

.status {
  position: relative;
}

.status::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: #84cd70;
}

.chat__user-name {
  margin: 0;
}

.chat__user-status {
  font-size: 13px;
  font-weight: 700;
  color: #84cd70;
}

.chat__call {
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: auto;
  transition: background 0.3s ease;
  background: url("../assets/phone-img.png") no-repeat center center / 60%,
    transparent;
  cursor: pointer;
}

.chat__call:hover {
  background: url("../assets/phone-img.png") no-repeat center center / 60%,
    #99ceff;
}

/* .chat__call:active,
.chat__call:focus {
  white icon
} */

.body {
  padding: 10px 25px;
}
.body__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.body__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.body__item:nth-child(odd) {
  align-self: self-end;
  flex-direction: row-reverse;
}

.body__img {
  width: 40px;
}

.avatar {
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
}

.body__item:nth-child(odd) .body__inner {
  text-align: end;
  flex-direction: row-reverse;
}

.body__inner {
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  gap: 5px;
}
.body__user-name {
  margin: 0;
}
.user-time {
  font-size: 12px;
  opacity: 40%;
}
/* правые сообщения */
.body__item:nth-child(odd) .body__message {
  border-radius: 15px 2px 15px 15px;
  background-color: #2176ff;
  color: white;
}
/* левые сообщения */
.body__item:nth-child(even) .body__message {
  border-radius: 2px 15px 15px 15px;
}

.body__message {
  padding: 10px 15px;
  background-color: #f2f2f2;
}
.body__message-text {
  margin: 0;
}

.chat__write-container {
  display: flex;
  flex-direction: row;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 25px;
  z-index: 100;
  background-color: #fff;
  bottom: 0;
  border-top: 2px solid rgba(128, 128, 128, 0.21);
}

.chat__input {
  padding: 15px 20px;
  flex: 1;
  border: none;
  border-radius: 15px;
  background-color: #f2f2f2;
  resize: none;
}

.chat__btn {
  padding: 15px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #2176ff;
  transition: transform linear 0.1s;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.71);
}

.chat__btn:active {
  transform: translateY(2px);
}

.chat__btn:focus,
.chat__btn:active {
  outline: none;
  border: none;
}
</style>
