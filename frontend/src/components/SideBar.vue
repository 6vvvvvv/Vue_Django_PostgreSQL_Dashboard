<template>
  <nav class="navibar-container">
    <ul class="navibar-nav">
      <li class="navibar-nav-logo">
        <a href="/" class="nav-link"
          ><span class="logo-text">IMPEKABLE</span>
          <img :src="logo" class="logo"
        /></a>
      </li>
      <li class="navibar-nav-item">
        <a href="/home" class="nav-link"
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

<style src="@/styles/ComponentCss/SideBar.css"></style>
