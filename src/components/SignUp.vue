<script>
export default {
  data() {
    return {
      isOpenComponent: false,
    };
  },
  methods: {
    showComponent() {
      console.log("hi");
    },
  },
};
</script>

<template>
  <section class="login">
    <div class="login__container container">
      <picture class="login__logo">
        <source srcset="" media="(max-width: 800px)" />
        <img
          src="../assets/logo-icon.png"
          alt="Logo TeleApp"
          class="login__img"
        />
      </picture>
      <h1 class="title">TeleApp</h1>
      <form id="signUp" class="login__form form">
        <input type="text" class="form__input" id="email" placeholder="email" />
        <span class="hr"></span>
        <input
          type="text"
          class="form__input"
          id="passord"
          placeholder="password"
        />
        <span class="hr"></span>
        <input
          type="text"
          class="form__input"
          id="passord"
          placeholder="Enter password again"
        />
        <button class="form__btn" id="singUp">Sign Up</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem;
  text-align: center;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.login__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__img {
  max-width: 260px;
  transition: filter 0.3s ease;
}

.title {
  font-size: 50px;
  background: -webkit-linear-gradient(90deg, #59cd65, #8387b5);
  background: linear-gradient(90deg, #59cd65, #8387b5);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form {
  max-width: 350px;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.form__input {
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  outline: transparent;
  background-color: #b2b2b234;
  border-radius: 5px;
  transition: outline 0.3s ease, background-color 0.4s ease;
}

.form__input:hover {
  background-color: #b2b2b254;
}

.form__input:focus,
.form__input:active {
  border: none;
  border-radius: 5px;
  /* outline: 3px solid rgba(249, 211, 24, 0.367); */
  outline: 3px solid #59cd65;
}

.form__input:last-of-type {
  margin-bottom: 20px;
}

.hr {
  width: 100%;
  height: 2px;
  background-color: #adadad;
  border-radius: 5px;
}

.form__btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 20px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color ease 0.3s, color ease 0.3s;
}

.form__btn:hover {
  background-color: #cfcfcf;
}

.form__btn:active {
  color: white;
  background-color: #565656;
}
</style>
