<template>
  <div id="customers">
    <div class="customers-side">
      <SideBar />
    </div>
    <div class="customers-search-contact">
      <div class="customers-search">
        <span>Customers</span><span><SearchBar /></span>
      </div>
      <div class="customers-contact">
        <ContactCard
          v-for="item in items"
          v-bind:key="item.id"
          v-bind:personavatar="item.avatar"
          v-bind:personname="item.name"
        />
      </div>
      <div class="pagation">
        <el-pagination background layout="prev, pager, next" :total="5">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";

export default {
  name: "Customers",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "David James",
          avatar: "avatar.png"
        },
        {
          id: 2,
          name: "Tony Stark",
          avatar: "avatar-1.png"
        },
        {
          id: 3,
          name: "Bessie Berry",
          avatar: "avatar-2.png"
        },
        {
          id: 4,
          name: "Gleb Kuznetsov",
          avatar: "avatar-3.png"
        },
        {
          id: 5,
          name: "Andrey Prokopenko",
          avatar: "avatar-4.png"
        },
        {
          id: 6,
          name: "Nick Herasimenka",
          avatar: "avatar-5.png"
        },
        {
          id: 7,
          name: "Valentin Salmon",
          avatar: "avatar-6.png"
        },
        {
          id: 8,
          name: "Miro Kirov",
          avatar: "avatar-7.png"
        }
      ]
    };
  },
  components: {
    SideBar,
    ContactCard,
    SearchBar
  }
};
</script>

<style>
div#customers {
  position: relative;
  width: calc(100% - 325px);
}

div.customers-search span:nth-child(1) {
  display: inline-block;
  width: 125px;
  height: 40px;
  margin-left: 50px;
  font-family: Source Sans Pro;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #43425d;
}

div.customers-search span:nth-child(2) {
  display: inline-block;
  margin-left: 380px;
  width: 570px;
  height: 45px;
}

div.customers-search-contact {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1180px;
  height: 850px;
}

div.customers-contact {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  top: 10px;
  width: 100%;
  height: 710px;
  padding: 40px 20px;
}

div.pagation {
  position: relative;
  top: 80px;
  left: 1000px;
  width: 100px;
}
</style>
