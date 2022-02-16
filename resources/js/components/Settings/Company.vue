<template>
    <div class="mt-2">
        <div class="mb-4">
            <v-list two-line class="pa-0">

                <v-list-item>
                    <v-list-item-content >
                    <v-img :src="company.image_url" height="150" width="150"></v-img>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon @click="modalimage()" class="mb-4">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon color="indigo">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>
                        Nombre:{{company.name}}
                    </v-list-item-title>
                    <v-list-item-title>Información: {{company.information}}</v-list-item-title>
                    <v-list-item-action>
                        <v-btn icon @click="edit(company.name,company.information)" class="mb-4">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <!-- <p class="display-1 text--primary">

                </p>
                <div class="text--primary">

                </div>
                <v-btn color="#66BB6A" @click="edit(company.name,company.information)" class="mb-4">
                    <v-icon color="#fff">
                        mdi-pencil
                    </v-icon>
                </v-btn>
                <v-btn color="warning" @click="modalimage()" class="mb-4">
                    <v-icon color="#fff">
                        mdi-file-image
                    </v-icon>
                </v-btn>-->
        </div>

        <template>
            <v-layout row justify-center>
                <v-dialog v-model="dialogedit" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar Empresa</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>

                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Nombre" v-model="name_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Información" v-model="info_edit" required></v-text-field>
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
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">

                <v-card>
                    <v-card-title>
                        <span class="headline">Añadir imagen</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md6>
                                    <v-file-input v-model="archivo" placeholder="Subir Archivo" label="Subir logo" prepend-icon="mdi-archive"></v-file-input>
                                </v-flex>

                                <v-flex xs12>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="danger" @click="dialog = false">Cancelar</v-btn>
                        <v-btn color="success" @click.prevent="edit_image()">Crear</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            company: [],
            dialog: false,
            dialogedit: false,
            name_edit: '',
            info_edit: '',
            archivo: null
        }
    },
    methods: {
        index() {
            axios.get("/api-company?id=1").then((response) => {
                this.company = response.data.company;
            });
        },
        edit(name, info) {

            this.dialogedit = true;
            this.name_edit = name;
            this.info_edit = info;
        },
        edit_model() {
            if (this.name_edit != '' || this.info_edit != '') {

                axios.put("/api-company/1", {
                    name: this.name_edit,
                    information: this.info_edit
                }).then((response) => {
                    if (response.status == 200) {
                        this.index();
                        this.dialogedit = false;
                        this.$swal({
                            title: 'Los datos han sido actualizados',
                            type: 'Ok'
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
        modalimage() {
            this.dialog = true;
        },
        edit_image() {
            let InstFormData = new FormData();
            InstFormData.append('imagen', this.archivo);
            axios.post('/company-image/1', InstFormData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((response) => {
                if (response.status == 200) {
                    this.index();
                    this.dialog = false;
                    this.archivo=null;
                    this.$swal({
                        title: 'Imagen Cambiada',
                        type: 'warning'
                    });
                } else {
                    this.$swal({
                        title: 'Error al cambiar imagen',
                        type: 'warning'
                    });
                }
            }).catch((e) => {
                this.$swal({
                    title: 'Error al cambiar imagen',
                    type: 'warning'
                });
            });
        },
    },
    created() {
        this.index();
    }
}
</script>
