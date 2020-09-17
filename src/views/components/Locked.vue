<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <!-- Basic elements -->
                    <h2 class="mb-5">
                        <span>Locked Ethereum</span>
                    </h2>
                    <tabs fill class="flex-column flex-md-row">
                        <card shadow slot-scope="{activeTabIndex}">
                            <tab-pane key="tab1">
                                <template slot="title">
                                    <i class="ni ni-cloud-upload-96 mr-2"></i>Globally Locked Ethereum
                                </template>

                                <p class="description">
                                    <table class='table'>
                                        <tr>
                                            <th>Address</th>
                                            <th class='longText d-md-table-cell'>Locked in Block #</th>
                                            <th>Eth</th>
                                            <th class='longText d-md-table-cell'>Duration</th>
                                        </tr>
                                        <tr class='d-md-none secondary'>
                                            <th>Locked in Block #</th>
                                            <th>Duration</th>
                                        </tr>                                        
                                        <tr>
                                            <td>0xe49A7.....A39c8</td>
                                            <td class='longText d-md-table-cell'>#10234553</td>
                                            <td><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid"><path fill="#343434" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/><path fill="#3C3C3B" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/><path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"/><path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/><path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z"/></svg> 2.5</td>
                                            <td class='longText d-md-table-cell'>6 Mo</td>
                                        </tr>
                                        <tr class='d-md-none secondary'>
                                            <td>#10234553</td>
                                            <td class='d-md-none'>6 Mo</td>
                                        </tr>
                                    </table>

                                </p>
                            </tab-pane>

                            <tab-pane key="tab2">
                                <template slot="title">
                                    <i class="ni ni-bell-55 mr-2"></i>Your Locked Ethereum
                                </template>

                                <p class="description">
                                    <table class='table'>
                                        <tr>
                                            <th>Locked in Block #</th>
                                            <th>Eth</th>
                                            <th>Duration</th>
                                            <th>Remaining</th>
                                        </tr>
                                    </table></p>
                            </tab-pane>

                            <tab-pane key="tab3">
                                <template slot="title">
                                    <i class="ni ni-calendar-grid-58 mr-2"></i>Unlock Ethereum
                                </template>

                                <p class="description">
                                    <table class='table'>
                                        <tr>
                                            <th>Locked in Block #</th>
                                            <th>Eth</th>
                                            <th>Remaining</th>
                                            <th>Action</th>
                                        </tr>
                                    </table>
                                    </p>
                            </tab-pane>
                        </card>
                    </tabs>                    
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
    name: 'locked',    
    components: {
        Tabs,
        TabPane
  }
};
</script>
<style scoped>
    table {
        text-align: center;
    }

    .secondary > td {
        padding-top: 0;
        border-bottom: 1px solid black;
    }
    .secondary > th {
        padding-top: 0;
        border-bottom: 1px solid black;
    }

</style>
