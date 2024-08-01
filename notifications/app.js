const app = Vue.createApp({})
    .component('notification-message', {
        template: '#NotificationMsgTemplate',
        props: {
            type: {type: String, default: 'Info'},
            header: {type: String, default: 'Информация'}
        },
        data() {
            return {
                show: true
            }
        }
    })
    .mount('#app')