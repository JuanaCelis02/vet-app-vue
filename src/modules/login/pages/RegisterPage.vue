<template>
  <div class="container mt-5">
    <div class="col-md-4 card p-5 offset-md-4">
      <h2 class="mb-3">Registrarse</h2>
      <form @submit.prevent="loginMethod">
        <div class="mb-3">
          <label for="username" class="form-label">User Name</label>
          <el-input
            name="username"
            v-model="username"
            type="text"
            placeholder="Ingrese Correo"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <el-input
            name="email"
            v-model="email"
            type="text"
            placeholder="Ingrese Correo"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <el-input
            name="password"
            v-model="password"
            type="password"
            show-password
            placeholder="Ingrese contraseña"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
      <p class="text-center mt-4">
        <router-link to="/login">¿Ya tienes cuenta? Inicia Sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
