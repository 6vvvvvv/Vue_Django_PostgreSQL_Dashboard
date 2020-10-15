<template>
  <ul class="profile-list">
    <li>
      <a href="">
        <div class="row profile">
          <div class="col-1 avatar">
            <img :src="require(`@/assets/inbox/${avatar}.png`)" alt="avatar" />
          </div>
          <div class="col-9 title-message">
            <div class="title">
              <p>{{ name }}</p>
            </div>
            <div class="message">
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
          <div class="date">{{ date }}</div>
        </div></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["avatar", "name", "date"]
};
</script>

<style src="@/styles/ComponentCss/PersonPanel.css"></style>
