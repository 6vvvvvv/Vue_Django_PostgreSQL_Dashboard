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

<style>
ul.profile-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: solid 1px #f1f1f3;
}
div.profile {
  position: relative;
  width: 100%;
  height: 80px;
  border: solid 1px #f1f1f3;
}

div.avatar img {
  margin: 18px 18px;
}

div.title-message {
  margin-left: 40px;
  margin-top: 15px;
}

div.title p {
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.message p {
  font-size: 10px;
}

div.date {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
