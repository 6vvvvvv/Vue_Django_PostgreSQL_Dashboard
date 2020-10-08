<template>
  <div id="invoice">
    <div class="invoice-side">
      <SideBar />
    </div>

    <div class="invoice-container">
      <div class="column">
        <div class="col-3 invoice-title">
          <p class="company">Company</p>
          <p class="inv">Invoice</p>
          <p class="addr">Melbourne, Australia P: (123) 456-7890</p>
          <div class="invoice-btn"><q-btn color="black" label="Print" /></div>
        </div>

        <div class="col-2">
          <div class="invoice-detail-order">
            <div class="invoice-detail">
              <p>Invoice to</p>
              <p>John Doe</p>
              <p>795 Folsom Ave, Suite 600</p>
              <p>San Francisco, CA 94107</p>
            </div>
            <div class="invoice-order">
              <p><span class="order-date">Order Date:</span>March 15, 2016</p>
              <p><span class="order-status">Order Status:</span>Pending</p>
              <p><span class="order-id">Order ID:</span> #1234567</p>
            </div>
          </div>
        </div>

        <div class="col-3 invoice-table"><InvoiceTable /></div>

        <div class="col-4 invoice-payment">
          <div class="invoice-payment-detail">
            <p><span class="sub-total">Sub-total:</span>2930.00</p>
            <p><span class="Discount">Discount:</span>12.9%</p>
            <p><span class="VAT">VAT:</span>12.9%</p>

            <p class="USD">USD 2930.00</p>

            <q-btn color="primary" label="Submit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import InvoiceTable from "../components/InvoiceTable";

import { QBtn } from "quasar";

export default {
  name: "Invoice",
  data: () => ({}),
  components: {
    SideBar,
    InvoiceTable,
    QBtn
  }
};
</script>

<style>
div#invoice {
  position: relative;
  width: calc(100% - 325px);
}

div.invoice-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1170px;
  height: 850px;
  background-color: white;
  padding: 40px 20px;
}

div.invoice-title {
  position: relative;
  border-bottom: solid 1px #f1f1f3;
  height: 150px !important;
}

p.company {
  position: relative;
  display: inline-block;
  left: 60px;
  top: 5px;
  font-family: Source Sans Pro;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

p.inv {
  position: relative;
  display: inline-block;
  left: 850px;
  top: 5px;
  font-family: Source Sans Pro;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

p.addr {
  position: relative;
  width: 125px;
  left: 60px;
  top: 5px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.invoice-btn {
  position: absolute;
  left: 910px;
  top: 70px;
}

/* span.q-btn__wrapper :first-child{
  background-color: #43425d;
} */

div.invoice-detail {
  display: inline-block;
  margin-left: 60px;
  margin-top: 40px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.invoice-detail p:first-child {
  font-weight: bold;
}

div.invoice-order {
  display: inline-block;
  margin-left: 680px;
  margin-top: 40px;
}

span.order-date {
  font-weight: bold;
}

span.order-status {
  font-weight: bold;
}

span.order-id {
  font-weight: bold;
}

div.invoice-payment-detail {
  float: right;
  margin-top: 20px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}

span.sub-total {
  font-weight: bold;
}

span.Discount {
  font-weight: bold;
}

span.VAT {
  font-weight: bold;
}

p.USD {
  margin-bottom: 30px;
  font-family: Source Sans Pro;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}
</style>
