<template>
  <div id="inbox">
    <div class="inbox-side">
      <SideBar />
    </div>
    <div class="inbox-container row">
      <div class="col-2">
        <div class="column">
          <div class="col-2 compose-btn">
            <q-btn color="primary" label="compose" />
          </div>
          <div class="col-3 select-box">
            <ul class="select">
              <li><a href="#">Inbox</a></li>
              <li><a href="#">Sent</a></li>
              <li><a href="#">Drafts</a></li>
              <li><a href="#">Trash</a></li>
              <li><a href="#">Important</a></li>
              <li><a href="#">Spam</a></li>
              <li><a href="#">Starred</a></li>
            </ul>
          </div>
          <div class="col-6 tag-box">
            <ul class="tag">
              <li>Tag</li>
              <li>
                <a href="#"
                  ><img :src="puple" alt="puple" /><span>Sales</span>
                </a>
              </li>
              <li>
                <a href="#"
                  ><img :src="blue" alt="blue" /> <span>Marketing</span></a
                >
              </li>
              <li>
                <a href="#"
                  ><img :src="orange" alt="orange" /><span>Design</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-3 search-profile">
        <div class="column">
          <div class="col-4 inbox-searchbar">
            <SearchBar />
          </div>
          <div class="col-7">
            <PersonPanel
              v-for="item in items"
              v-bind:key="item.key"
              v-bind:avatar="item.avatar"
              v-bind:name="item.name"
              v-bind:date="item.date"
            />
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="column mail">
          <div class="col-2 mail-button-title ">
            <el-button type="danger" round>Design</el-button>
            <p class="ppm">Protective Preventative Maintenance</p>
          </div>
          <div class="col-3 mail-profile">
            <img :src="avatar" alt="avatar" />
            <p class="avatar-name">David James</p>
            <p class="to-me">to me</p>
          </div>
          <div class="col-5 mail-content">
            <p class="content">
              Hi David,
              <br />
              <br />
              <br />
              Iste minus et. Non necessitatibus ut est est id amet. Officiis
              sequi dolorum assumenda ipsam magnam cum possimus. Laudantium
              nulla amet tempore excepturi id expedita dolorum quisquam
              deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam
              unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae.
              Laboriosam numquam amet aliquid.
              <br />
              <br />
              Iste minus et. Non necessitatibus ut est est id amet. Officiis
              sequi dolorum assumenda ipsam magnam cum possimus. Laudantium
              nulla amet tempore excepturi id expedita dolorum quisquam
              deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam
              unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae.
              Laboriosam numquam amet aliquid.
              <br />
              <br />
              Iste minus et. Non necessitatibus ut est est id amet. Officiis
              sequi dolorum Iste minus et. Non necessitatibus ut est est id
              amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus.
              Laudantium nulla amet tempore excepturi id expedita dolorum
            </p>
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
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import { QBtn } from "quasar";
import SearchBar from "../components/SearchBar";
import PersonPanel from "../components/PersonPanel";

export default {
  name: "Dashboard",
  data: () => ({
    puple: require("../assets/inbox/Ellipse 36.png"),
    blue: require("../assets/inbox/Ellipse 37.png"),
    orange: require("../assets/inbox/Ellipse 38.png"),
    avatar: require("../assets/inbox/avatar.png"),
    textarea: "",
    items: [
      { id: 1, avatar: "avatar", name: "David James", date: "Jan 5" },
      { id: 2, avatar: "avatar-1", name: "Tony Stark", date: "Jan 4" },
      { id: 3, avatar: "avatar-2", name: "Bessie Berry", date: "Jan 2" },
      { id: 4, avatar: "avatar-3", name: "Gleb Kuznetsov", date: "Dec 30" },
      { id: 5, avatar: "avatar-4", name: "Andrey Prokopenko", date: "Dec 28" },
      { id: 6, avatar: "avatar-5", name: "Nick Herasimenka", date: "Dec 17" },
      { id: 7, avatar: "avatar-6", name: "Valentin Salmon", date: "Dec 12s" }
    ]
  }),
  components: {
    SideBar,
    QBtn,
    SearchBar,
    PersonPanel
  }
};
</script>

<style>
div#inbox {
  position: relative;
  width: calc(100% - 325px);
}

div.inbox-side {
  position: relative;
}

div.inbox-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1300px;
  height: 752px;
  background-color: white;
}

div.compose-btn {
  padding: 25px 23px;
  border: solid 1px #f1f1f3;
}

span.q-btn__wrapper {
  width: 150px;
}

div.select-box {
  border: solid 1px #f1f1f3;
}

ul.select {
  list-style-type: none;
}

ul.select li {
  margin-top: 15px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.tag-box {
  border: solid 1px #f1f1f3;
  border-bottom: none;
  height: 100%;
}

ul.tag {
  list-style-type: none;
}

ul.tag li {
  margin-top: 15px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

ul.tag li:first-child {
  margin-top: 30px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

ul.tag li:not(first-child) span {
  margin-left: 10px;
}

li > a {
  text-decoration: none;
}

span.block {
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ffffff;
}

div.search-profile {
  border: solid 1px #f1f1f3;
}

div.inbox-searchbar {
  padding: 23px 45px;
  border: solid 1px #f1f1f3;
}

div.mail {
  border: solid 1px #f1f1f3;
  width: 100%;
}

div.mail-button-title {
  margin-left: 37px;
  margin-top: 30px;
}

p.ppm {
  display: inline-block;
  margin-left: 12px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

button.el-button.is-round {
  width: 120px;
  height: 35px;
  padding: 0px 23px;
}

div.mail-profile {
  position: relative;
  border-bottom: solid 1px #f1f1f3;
}

div.mail-profile img {
  float: left;
  margin-left: 37px;
  margin-top: 20px;
}

p.avatar-name {
  margin-top: 20px;
  margin-left: 100px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

p.to-me {
  margin-left: 100px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

p.content {
  margin: 20px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: 0px;
}

textarea.el-textarea__inner {
  margin: 20px;
  width: 630px;
  height: 150px;
}
</style>
