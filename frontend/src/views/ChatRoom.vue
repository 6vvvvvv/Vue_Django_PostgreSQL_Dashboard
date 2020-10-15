<template>
  <div id="chat">
    <div class="chat-side">
      <SideBar />
    </div>
    <div class="chat-container row">
      <div class="chat-person-search col-4 column">
        <div class="chat-search col-2"><SearchBar /></div>
        <div class="chat-person col-10">
          <PersonPanel
            v-for="item in items"
            v-bind:key="item.key"
            v-bind:avatar="item.avatar"
            v-bind:name="item.name"
            v-bind:date="item.date"
          />
        </div>
      </div>
      <div class="chat-title-content-edit col-8 column">
        <div class="chat-title col-2">
          <img :src="avatar" alt="avatar" />
          <p class="chat-avatar-name">David James</p>
          <p class="chat-job">Account Manager</p>
          <img :src="close" alt="close" class="close" />
        </div>
        <div class="chat-content col-7"><ChatMessage /></div>
        <div class="chat-edit col-3">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="click to reply"
            v-model="textarea"
          >
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import ChatMessage from "../components/ChatMessage";
import SearchBar from "../components/SearchBar";
import PersonPanel from "../components/PersonPanel";

export default {
  name: "Chat",
  data: () => ({
    avatar: require("../assets/inbox/avatar.png"),
    close: require("../assets/customers/close.png"),
    textarea: "",
    items: [
      {
        id: 1,
        name: "David James",
        avatar: "avatar"
      },
      {
        id: 2,
        name: "Tony Stark",
        avatar: "avatar-1"
      },
      {
        id: 3,
        name: "Bessie Berry",
        avatar: "avatar-2"
      },
      {
        id: 4,
        name: "Gleb Kuznetsov",
        avatar: "avatar-3"
      },
      {
        id: 5,
        name: "Andrey Prokopenko",
        avatar: "avatar-4"
      }
    ]
  }),
  components: {
    SideBar,
    ChatMessage,
    SearchBar,
    PersonPanel
  }
};
</script>

<style src="@/styles/ViewCss/ChatRoom.css"></style>
