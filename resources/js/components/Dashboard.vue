<template>
    <div class="container">
        <div class="row">
            <v-card class="mx-auto text-white mt-3" width="300" max-width="600" color="blue darken-2">
                <v-card-text>
                    <p class="display-1 text-white text-center">
                        Propiedades
                    </p>
                    <p class="display-1 text-white text-center">
                        {{properties}}
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                        <a href="/properties-user" class="text-white">Ver Propiedades</a>

                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto text-white mt-3" width="300" max-width="600" color="red darken-2">
                <v-card-text>
                    <p class="display-1 text-white text-center">
                        Cambios realizados
                    </p>
                    <p class="display-1 text-white text-center">
                        {{reports}}
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                        <a href="/reports" class="text-white">Ver Reportes</a>

                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto text-white mt-3" width="300" max-width="600" color="teal darken-1">
                <v-card-text>
                    <p class="display-1 text-white text-center">
                        Usuarios
                    </p>
                    <p class="display-1 text-white text-center">
                        {{users}}
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                      <a href="/users" class="text-white">Ver Usuarios</a>

                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

    </div>

</template>

<script>

export default {
    data: () => ({
        properties: '',
        users: '',
        reports:''
    }),
    created() {
        axios.get("/api-dashboard").then((response) => {
            this.properties = response.data.property;
            this.users = response.data.users;
            this.reports=response.data.reports;
        });
    }

}
</script>
