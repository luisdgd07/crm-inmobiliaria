<template>
    <div class="mt-2">


        <v-data-table :headers="headers" :items="currency" no-results-text="No hay resultados" no-data-text="No hay monedas" class="elevation-1" :search="search">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-text-field clearable v-model="search" label="Buscar" class="mt-3"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark absolute right fab class="mt-3" @click="dialog=true">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>

            </template>
            <template>
                <tr>
                    <td></td>
                    <td>
                    </td>
                    <td colspan="4"></td>
                </tr>
            </template>
            <template v-slot:item.action="{ item }">

                <v-btn color="#66BB6A" @click="edit(item.id,item.currency)">
                    <v-icon color="#fff">
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn color="#E53935" @click="delete_dialog(item.id,item.currency)">
                    <v-icon color="#fff">
                        mdi-delete
                    </v-icon>
                </v-btn>
            </template>

        </v-data-table>
        <template>

            <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent max-width="400px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Crear Moneda</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Moneda*" v-model="name" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        {{error}}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" @click="dialog = false; error=''">Cancelar</v-btn>
                            <v-btn color="success" @click.prevent="create()">Crear</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="dialogedit" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar Moneda</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>

                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Moneda" v-model="name_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        {{error_edit}}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" @click="dialogedit = false;error_edit=''">Cancelar</v-btn>
                            <v-btn color="success" @click.prevent="edit_model()">Editar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="dialogdelete" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Desea eliminar la moneda: {{currency_eliminar}}</span>
                        </v-card-title>
                        <v-card-text>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="dialogdelete = false">Cancelar</v-btn>
                            <v-btn color="#E53935" class="text-white" @click.prevent="delete_model()">Eliminar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currency: [],
            dialog: false,
            dialogedit: false,
            dialogdelete: false,
            name: '',
            name_edit: '',
            error: '',
            error_edit: '',
            search: '',
            id_delete: '',
            currency_eliminar: '',
            drawer: false,
            group: null,

        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        index() {
            axios.get("/api-currency").then((response) => {
                this.currency = response.data.currency;
            });
        },
        create() {
            if (this.name != '') {
                axios.post("/api-currency", {
                    name: this.name,
                }).then((response) => {
                    if (response.status == 200) {
                        this.index();
                        this.name = '';
                        this.dialog = false;
                        this.$swal({
                            title: 'Moneda creada',
                            type: 'ok'
                        });
                    }
                });
            } else {
                this.$swal({
                    title: 'Complete todos los campos',
                    type: 'warning'
                });
            }

        },
        edit_model() {
            if (this.name_edit != '') {
                axios.put("/api-currency/" + this.id_edit, {
                    name: this.name_edit,
                }).then((response) => {
                    if (response.status == 200) {
                        this.index();
                        this.id_edit = '';
                        this.dialogedit = false;
                        this.$swal({
                            title: 'Moneda editada',
                            type: 'ok'
                        });
                    }
                });
            } else {
                this.$swal({
                    title: 'Complete todos los campos',
                    type: 'warning'
                });
            }
        },
        delete_model() {
            console.log(this.id_delete);
            axios.delete("/api-currency/" + this.id_delete).then((response) => {
                console.log(response);
                if (response.status == 200) {
                    this.index(0, '');
                    this.dialogdelete = false;
                } else {
                    this.error = "Error al añadir propiedad";
                }
            });
        },
        edit(id, name) {
            this.dialogedit = true;
            this.id_edit = id;
            this.name_edit = name;
        },
        delete_dialog(id, title) {
            this.id_delete = id;
            this.dialogdelete = true;
            this.currency_eliminar = title;
        }
    },
    created() {
        this.index();
    },
    computed: {
        headers() {
            return [{
                    text: 'Moneda',
                    align: 'start',
                    sortable: true,
                    value: 'currency',
                },
                {
                    text: 'Acciones',
                    value: 'action',
                }
            ]
        },
    },
}
</script>
