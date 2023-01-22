/*create a variable app set to Vue()*/
const app = Vue.createApp({
    /*template: '', object */
    data() { /* function*/
        return {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            email: 'johndoe@gmail.com',
            phone: '356 987 9901',
            country: 'United states',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg',
        }
    },
    methods: { /*methods can be defined right under data*/
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()

            console.log(results)

            /*console.log(this.firstName) cmd option j*/
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.email = results[0].email
            this.phone = results[0].phone
            this.country = results[0].location.country
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')