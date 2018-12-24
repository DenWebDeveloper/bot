<template>
    <v-card>
        <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    @click:append="getUsers"
                    label="Пошук"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :pagination.sync="pagination"
                :headers="headers"
                :items="users"
                :total-items="totalItems"
                :rows-per-page-items="[10,15,20]"
                class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.id}}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.second_name }}</td>
                <td class="text-xs-center">{{ props.item.surname }}</td>
                <td class="text-xs-center">{{ props.item.pharmacy_id}}</td>
                <td class="text-xs-center">
                    <v-chip outline v-if="props.item.confirm_admin" color="green" text-color="green">Підтверджено</v-chip>
                    <v-chip outline v-else color="red" text-color="red">Не підтверджено</v-chip>
                </td>
                <td class="text-xs-center">
                    <v-chip outline v-if="props.item.confirm_email" color="green" text-color="green">Підтверджено</v-chip>
                    <v-chip outline v-else color="red" text-color="red">Не підтверджено</v-chip>
                </td>
                <td class="justify-center layout px-0">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)">
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(props.item)">
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    export default {
        name: 'PharmacistsTable',
        data: () => ({
            dialog: false,
            users: [],
            search: '',
            pagination: {},
            totalItems: 0,
            headers: [
                {text: 'ID', value: 'id'},
                {text: 'Ім\'я', value: 'name'},
                {text: 'По-батькові', value: 'second_name'},
                {text: 'Фамілія', value: 'surname'},
                {text: 'Аптека', value: 'pharmacy_id'},
                {text: 'Підтвердження адміна', value: 'confirm_admin'},
                {text: 'Підтверджена почта', value: 'confirm_email'},
                {text: 'Дії', value: 'id', sortable: false}
            ],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            }
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            pagination: {
                deep: true,
                handler() {
                    this.getUsers()
                }
            }
        },

        mounted() {
            this.getUsers()
        },

        methods: {
            getUsers() {
                const {pagination} = this
                this.$http(`/users/pharmacists`, {
                    params: {
                        ...pagination,
                        page: pagination.page - 1,
                        search: this.search
                    }
                }).then(({data}) => {
                    this.totalItems = data.total
                    this.users = data.results
                })
            },
            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>
