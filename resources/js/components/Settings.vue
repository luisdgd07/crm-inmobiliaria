<template>
    <div class="text-center">
        <v-card color="blue" dark>
            <div class="display-1">Configuración</div>

            <v-tabs v-model="tab" background-color="blue" dark>
                <v-tab v-for="itemtab in items" :key="itemtab">
                    {{ itemtab }}
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item :key="itemtab">

                        <Company />
                </v-tab-item>
                <v-tab-item >

                        <currency />
                </v-tab-item>
                <v-tab-item>
                        <status />
                </v-tab-item>

                <v-tab-item>
                    <v-card class="my-4" color="cyan darken-3">
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>

    </div>
</template>

<script>
import Currency from './Settings/Currency';
import Status from './Settings/Status';
import Company from './Settings/Company';
export default {
    components: {
        Currency,
        Status,
        Company
    },
    data() {
        return {
            items: [
                'General', 'Monedas', 'Estatus'
            ],
            tab: null,
            itemtab: '',
        }
    },
    methods: {},
}
</script>
