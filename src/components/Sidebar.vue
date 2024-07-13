<script>
// import { UserButton } from "vue-clerk";

let id = 0;

export default {
  data() {
    return {
      users: [
        {
          id: id++,
          name: "Rick Sanchez",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Morty Smith",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Summer Smith",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Jerry Smith",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Beth Smith",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "The President",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Mr. Goldenfold",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Ice T",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Dr. Wong",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Birdperson",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
        {
          id: id++,
          name: "Birdperson",
          status: true,
          img: "someNameImg.png",
          lastMessage: "hi, whats happened? ",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- <UserButton /> -->

  <aside class="chat__sidebar sidebar">
    <input
      type="text"
      class="sidebar__search"
      id="search"
      placeholder="In development"
      disabled="disabled"
    />
    <ul class="sidebar__list">
      <li v-for="user in users" :key="user.id" class="sidebar__item">
        <div class="sidebar__avatar-status status">
          <img
            src="../assets/avatar-img.png"
            alt=""
            class="sidebar__avatar avatar"
          />
        </div>
        <div class="sidebar__wrapp">
          <h2 class="sidebar__user-name">{{ user.name }}</h2>
          <p class="sidebar__message">
            <span class="addressee">you:</span>{{ user.lastMessage }}
          </p>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px 15px;
  border-right: 2px solid rgba(128, 128, 128, 0.21);
}

.sidebar__list {
  margin: 0;
  padding: 0;
  display: flex;
  overflow: overlay;
  flex-direction: column;
  gap: 5px;
  list-style: none;
}

.sidebar__search {
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 80%;
  background-color: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
}

.sidebar__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
}

.sidebar__item:hover {
  background-color: #f2f2f2;
}

.sidebar__item:hover .status::after {
  border: 1px solid #f2f2f2;
}

.sidebar__item:active {
  background-color: #000;
  color: #fff;
}

.sidebar__item:active .status::after {
  border: 1px solid black;
}

.active {
  background-color: #000;
  color: #fff;
}

.active .status::after {
  border: 1px solid black;
}

.avatar {
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
}

.sidebar__user-name {
  margin: 0;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
}
.sidebar__message {
  max-width: 60%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 100;
}
.addressee {
  text-transform: uppercase;
  margin-right: 5px;
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
</style>
