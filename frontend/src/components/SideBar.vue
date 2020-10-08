<template>
  <nav class="navibar-container">
    <ul class="navibar-nav">
      <li class="navibar-nav-logo">
        <a href="#" class="nav-link"
          ><span class="link-text logo-text">IMPEKABLE</span>
          <img :src="logo" class="logo"
        /></a>
      </li>
      <li class="navibar-nav-item">
        <a href="/login" class="nav-link"
          ><img :src="home" class="item" />
          <span class="link-text">Home</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/dashboard" class="nav-link"
          ><img :src="dashboard" class="item" />
          <span class="link-text">Dashboard</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/inbox" class="nav-link"
          ><img :src="inbox" class="item" />
          <span class="link-text">Inbox</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/product" class="nav-link"
          ><img :src="products" class="item" />
          <span class="link-text">Products</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/invoice" class="nav-link"
          ><img :src="invoices" class="item" />
          <span class="link-text">Invoices</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/customers" class="nav-link"
          ><img :src="customers" class="item" />
          <span class="link-text">Customers</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/chat" class="nav-link"
          ><img :src="chatroom" class="item" />
          <span class="link-text">Chat Room</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="/calendar" class="nav-link"
          ><img :src="calendar" class="item" />
          <span class="link-text">Calendar</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="#" class="nav-link"
          ><img :src="helpcenter" class="item" />
          <span class="link-text">Help Center</span>
        </a>
      </li>
      <li class="navibar-nav-item">
        <a href="#" class="nav-link"
          ><img :src="setting" class="item" />
          <span class="link-text">Setting</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      logo: require("../assets/sidebar/Logo@2x.png"),
      home: require("../assets/sidebar/icon_home@2x.png"),
      dashboard: require("../assets/sidebar/icon_dashboard@2x.png"),
      inbox: require("../assets/sidebar/icon_inbox@2x.png"),
      products: require("../assets/sidebar/icon_products@2x.png"),
      invoices: require("../assets/sidebar/icon_Invoices@2x.png"),
      customers: require("../assets/sidebar/icon_customers@2x.png"),
      chatroom: require("../assets/sidebar/icon_chat-room@2x.png"),
      calendar: require("../assets/sidebar/icon_calendar@2x.png"),
      helpcenter: require("../assets/sidebar/icon_help-center@2x.png"),
      setting: require("../assets/sidebar/icon_setting@2x.png")
    };
  }
};
</script>

<style>
nav.navibar-container {
  position: fixed;
  width: 66px;
  height: 100%;
  background-color: #43425d;
}

nav.navibar-container:hover {
  position: fixed;
  width: 260px;
  height: 100%;
  background-color: #43425d;
}

ul.navibar-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li.navibar-nav-logo {
  position: relative;
  width: 100%;
  height: 70px;
}

li.navibar-nav-logo > a.nav-link > span.logo-text {
  display: none;
}

nav.navibar-container:hover li.navibar-nav-logo > a.nav-link > span.logo-text {
  position: relative;
  display: block;
  width: 100px;
  height: 21px;
  margin: 26px 0 23px 25px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.05);
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 3px;
  color: #ffffff;
}

li.navibar-nav-logo > a.nav-link > img.logo {
  width: 30px;
  height: 30px;
  color: white;
  margin: 26px 0 23px 20px;
}

nav.navibar-container:hover li.navibar-nav-logo > a.nav-link > img.logo {
  display: none;
}

li.navibar-nav-item {
  display: block;
  padding: auto;
  width: 100%;
  height: 53px;
}

li.navibar-nav-item :hover {
  opacity: 0.7;
  transition: 400ms;
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 5px solid #a3a0fb;
}

a.nav-link {
  display: flex;
  align-items: center;
}

a.nav-link img.item {
  display: flex;
  width: 15px;
  height: 15px;
  margin: 19px 11px 20px 25px;
  align-items: center;
  text-decoration: none;
  color: white;
}

a.nav-link img.item:hover {
  border: none;
}

a.nav-link span.link-text {
  display: none;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: white;
}

a.nav-link span.link-text:hover {
  border: none;
}

nav.navibar-container:hover a.nav-link span.link-text {
  display: block;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: white;
}
</style>
