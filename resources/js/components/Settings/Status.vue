<template>
    <div class="mt-2">


        <v-data-table :headers="headers" no-results-text="No hay resultados" no-data-text="No hay datos disponibles" :items="status" class="elevation-1" :search="search">
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

                <v-btn color="#66BB6A" @click="edit(item.id,item.status)">
                    <v-icon color="#fff">
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn color="#E53935" @click="delete_dialog(item.id,item.status)">
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
                            <span class="headline">Crear estado de propiedad</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Nombre" v-model="name" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        {{error}}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" @click="dialog = false">Cancelar</v-btn>
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
                            <span class="headline">Editar propiedad</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>

                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Información de la propiedad" v-model="name_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        {{error}}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" @click="dialogedit = false">Cancelar</v-btn>
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
                            <span class="headline">Desea eliminar: {{status_eliminar}}</span>
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
            status: [],
            dialog: false,
            dialogedit: false,
            dialogdelete: false,
            name: '',
            name_edit: '',
            error: '',
            search: '',
            id_delete: '',
            status_eliminar: '',
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
            axios.get("/api-status").then((response) => {
                this.status = response.data.status;
            });
        },
        create() {
            axios.post("/api-status", {
                name: this.name,
            }).then((response) => {
                if (response.status == 200) {
                    this.index();
                    this.name = '';
                    this.dialog = false;
                }
            });
        },
        edit_model() {
            axios.put("/api-status/" + this.id_edit, {
                name: this.name_edit,
            }).then((response) => {
                if (response.status == 200) {
                    this.index();
                    this.id_edit = '';
                    this.dialogedit = false
                }
            });
        },
        delete_model() {
            axios.delete("/api-status/" + this.id_delete).then((response) => {
                if (response.status == 200) {
                    this.index(0, '');
                    this.dialogdelete = false;
                } else {
                    this.error = "Error al eliminar";
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
            this.status_eliminar = title;
        }
    },
    created() {
        this.index();
    },
    computed: {
        headers() {
            return [{
                    text: 'Nombre',
                    align: 'start',
                    sortable: true,
                    value: 'status',
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
