<script setup>
import Sidebar from "./components/Sidebar.vue";
import ChatPage from "./components/ChatPage.vue";
import LogIn from "./components/LogIn.vue";
import { SignedIn, SignedOut, SignInButton } from "vue-clerk";
</script>

<template>
  <main>
    <section class="chat">
      <SignedOut>
        <LogIn />
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar> </Sidebar>
        <ChatPage />
      </SignedIn>
    </section>
  </main>
</template>

<style scoped>
body {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
.chat {
  display: flex;
  flex-direction: row;
}
</style>
