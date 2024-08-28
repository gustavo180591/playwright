import { test } from "@playwright/test";

test("1 prueba con saucedemo ", async ({ page }) => {
  await page.goto('https://saucedemo.com')

  await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
  await page.getByRole('button', {name:'Login'}).click()

  await page.pause()

});

/* 1 login con correo v
2 login con usuario v
3 credencial invalida v
4 crear orgranizacion con areas v
5 crear orgranizacion con areas y miembros en la organizacion y en el area v
6 enviar mensaje v
7 agregar contacto v*/
