<template>
    <div class="">
        <v-card color="light-blue darken-2">
            <v-card-title >

                    <v-icon dark>mdi-account</v-icon>
                    <div class="white--text">{{profile.name}}</div>
                    <v-spacer></v-spacer>
                    <v-btn dark icon @click="edit(profile.name,profile.email,profile.phone,profile.pronvince,profile.direction)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn dark icon @click="modalpass()">
                        <v-icon>mdi-account-key</v-icon>
                    </v-btn>

            </v-card-title>

            <v-list two-line class="pa-0">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon color="indigo">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{profile.phone}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon color="indigo">mdi-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title> {{profile.email}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon color="indigo">mdi-google-maps</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        Provincia: {{profile.pronvince}}
                        <v-list-item-title> Dirección: {{profile.direction}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="dialogedit" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar Usuario</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>

                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable label="Nombre*" v-model="name_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable label="Correo*" v-model="email_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable label="Teléfono*" v-model="phone_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable label="Provincia*" v-model="province_edit" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field outlined shaped clearable label="Dirección*" v-model="direction_edit" required></v-text-field>
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
                <v-dialog v-model="dialogpass" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar Contraseña</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable type="password" label="Contraseña nueva*" v-model="passnew" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field outlined shaped clearable type="password" label="Confirmar nueva contraseña*" v-model="cpassnew" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        {{error_edit}}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" @click="dialogpass = false">Cancelar</v-btn>
                            <v-btn color="success" @click.prevent="edit_pass()">Editar</v-btn>
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
            profile: [],
            dialogpass: false,
            dialogedit: false,
            name_edit: '',
            email_edit: '',
            phone_edit: '',
            province_edit: '',
            direction_edit: '',
            passnew: '',
            cpassnew: '',
            error: '',
            error_edit: ''
        }
    },
    methods: {
        index() {
            axios.get("/api-user").then((response) => {
                this.profile = response.data.user;
            });
        },
        edit(name, email, phone, province, direction) {
            this.dialogedit = true;
            this.name_edit = name;
            this.email_edit = email;
            this.phone_edit = phone;
            this.province_edit = province;
            this.direction_edit = direction;
        },
        edit_model() {
            if (this.email_edit == '' || this.name_edit == '' || this.phone_edit == '' || this.province_edit == '' || this.direction_edit == '') {
                this.$swal({
                    title: 'Complete todos los campos',
                    type: 'warning'
                });
            } else {
                axios.post("/api-user", {
                    name: this.name_edit,
                    email: this.email_edit,
                    phone: this.phone_edit,
                    pronvince: this.province_edit,
                    direction: this.direction_edit
                }).then((response) => {
                    if (response.status == 200) {
                        this.index();
                        this.name_edit = '';
                        this.email_edit = '';
                        this.phone_edit = '';
                        this.province_edit = '';
                        this.direction_edit = '';
                        this.dialogedit = false;
                        this.$swal('Usuario editado con exito', '', 'OK');
                    } else {
                        this.$swal({
                            title: 'Error al editar usuario',
                            type: 'warning'
                        });
                    }
                }).catch((e) => {
                    this.$swal({
                        title: 'Error al editar usuario, correo en uso',
                        type: 'warning'
                    });
                });
            }

        },
        modalpass() {
            this.dialogpass = true;
        },
        edit_pass() {
            let pass1 = this.passnew;
            let pass2 = this.cpassnew;
            if (pass1 != pass2) {
                this.$swal({
                    title: 'Las contraseña no coinciden',
                    type: 'warning'
                });
            } else {
                axios.post("/api-password", {
                    password: this.passnew
                }).then((response) => {
                    if (response.status == 200) {
                        this.dialogpass = false;
                        this.cpassnew = '';
                        this.passnew = '';
                        this.$swal('Contraseña editada con exito', '', 'OK');
                    } else {
                        this.$swal({
                            title: 'error al cambiar contraseña',
                            type: 'warning'
                        });
                    }
                });
            }
        },
    },
    created() {
        this.index();
    }
}
</script>
