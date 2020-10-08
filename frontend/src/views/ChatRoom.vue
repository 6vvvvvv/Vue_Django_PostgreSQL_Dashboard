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
      },

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

<style>
div#chat {
  position: relative;
  width: calc(100% - 325px);
}

div.chat-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1170px;
  height: 752px;
  background-color: white;
  padding: 40px 20px;
}

div.chat-person-search {
  border: solid 1px #f1f1f3;
}

div.chat-search {
  display: flex;
  align-items: center;
}

div.chat-title-content-edit {
  position: relative;
  border: solid 1px #f1f1f3;
}

div.chat-title {
  position: relative;
  border: solid 1px #f1f1f3;
}

div.chat-title img {
  position: relative;
  float: left;
  left: 30px;
  top: 30px;
}

div.chat-title p.chat-avatar-name {
  position: relative;
  left: 50px;
  top: 35px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.chat-title p.chat-job {
  position: relative;
  left: 50px;
  top: 25px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
  opacity: 0.5;
}

div.chat-title img.close {
  position: absolute;
  top: 35px;
  left: 700px;
}

div.chat-edit {
  position: relative;
  border: solid 1px #f1f1f3;
}

textarea.el-textarea__inner {
  width: 710px;
  height: 125px;
}
</style>
