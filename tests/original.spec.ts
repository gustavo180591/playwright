import { test } from "@playwright/test";

test("Agregar una organización", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Contraseña").click();
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.locator("label").filter({ hasText: "Gu" }).locator("span").click();
  await page.getByRole("button", { name: "Organizaciones" }).click();
  await page.getByRole("button", { name: "Agregar una organización" }).click();
  await page.getByLabel("Nombre de la organización").click();
  await page.getByLabel("Nombre de la organización").fill("mistec2");
  await page.getByRole("button", { name: "Mostrar opciones" }).click();
  await page
    .getByLabel(
      "Mensaje de bienvenida0/200Permitir la recepción de mensajes destinados a la"
    )
    .click();
  await page
    .getByLabel(
      "Mensaje de bienvenida0/200Permitir la recepción de mensajes destinados a la"
    )
    .fill("hola que tal bienvenido");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page
    .locator("#modal_create_entity")
    .getByRole("button", { name: "✕" })
    .click();
  await page.getByRole("button", { name: "Cerrar sesión" }).click();
  await page.pause();
});



test("Credenciales invalidas", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo18");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.getByText("Credenciales invalidas").click();
  
});

test('agregar contacto', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').click();
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Usuario o email').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.locator('.drawer-content > .fill-white').click();
  await page.locator('.flex > div:nth-child(2) > button').first().click();
  await page.locator('#search_account_modal').getByPlaceholder('Buscar...').click();
  await page.locator('#search_account_modal').getByPlaceholder('Buscar...').fill('mauro');
  await page.locator('#accordion-collapse-contactlist-heading-01J5X6ZD11A3RKARVK4PHTTDAJ').getByRole('button').nth(1).click();
  await page.locator('#add_member_confirmation_modal').getByRole('button', { name: 'Agregar' }).click();
  await page.locator('#search_account_modal').getByRole('button', { name: '✕' }).click();
  
});

login con correo 
login con usuario
credencial invalida 
crear orgranizacion con areas
crear orgranizacion con areas y miembros en la organizacion y en el area
enviar mensaje 
agregar contacto



