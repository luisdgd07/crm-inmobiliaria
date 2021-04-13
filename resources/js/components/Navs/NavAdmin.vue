<template>
    <div class="">
        <v-app-bar color="light-blue darken-1 " dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <v-spacer></v-spacer>
            <button @click.prevent="logout()">
                <v-icon>mdi-import</v-icon>

            </button>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>

            <v-list color="light-blue darken-1 ">
                <v-list-item>
                    <v-list-item-content>
                        <a href="/" class="">
                            LOGO
                            <!-- <v-img src="/images/main-transparent.png"  contain height="50"></v-img> -->
                            <v-list-item-title class="title white--text">
                                Application
                            </v-list-item-title>
                        </a>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list nav dense>

                <v-list-item-group v-model="group" active-class="light-blue darken-4 text-white" style="text-decoration:none">
                    <v-list-item href="/">
                        Pagina web
                    </v-list-item>
                    <v-list-item href="/users">
                        Usuarios
                    </v-list-item>

                    <v-list-item href="/currency">
                        Monedas
                    </v-list-item>
                    <v-list-item href="/properties-user">
                        Propiedades
                    </v-list-item>
                    <v-list-item href="/status">
                        Estatus de propiedades
                    </v-list-item>
                    <v-list-item href="/interested">
                        Interesados de compra
                    </v-list-item>

                    <v-list-item href="/profile">
                        <a>Mi perfil</a>
                    </v-list-item>
                    <v-list-item href="/home">
                        Estaditicas
                    </v-list-item>
                    <v-list-item href="/reports">
                        Historial de operaciones
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>

</template>

<style scoped>
.v-list-item:hover {
    text-decoration: none;
}
</style>

<script>
export default {
    props: {
        title: String,
    },
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        logout() {
            axios.post("/logout", {

            }).then((response) => {
                if (response.status == 200) {
                    window.location.href = "/"
                }
            });
        }
    }

}
</script>
