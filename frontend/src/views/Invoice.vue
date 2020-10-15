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

<style src="@/styles/ViewCss/Invoice.css"></style>
