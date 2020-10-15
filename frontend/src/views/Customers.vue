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

<style src="@/styles/ViewCss/Customers.css"></style>
