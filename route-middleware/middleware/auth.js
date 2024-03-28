export default defineNuxtRouteMiddleware((to , from) =>{
    console.log(to)
    console.log(from)

    const login = false; 
    if(!login){
        return navigateTo("/login");
    }
})