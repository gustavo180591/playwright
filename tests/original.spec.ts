import { test } from "@playwright/test";


test("1 login con correo ", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo.faccendini@gmail.com");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
});

test("2 login con usuario", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Contraseña").click();
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
}),
  test("3 credencial invalida", async ({ page }) => {
    await page.goto("https://test2.guazuapp.com.ar/");
    await page.getByPlaceholder("Usuario o email").click();
    await page.getByPlaceholder("Usuario o email").fill("gustavo18");
    await page.getByPlaceholder("Usuario o email").press("Tab");
    await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await page.getByText("Credenciales invalidas").click();
  });

  test("4 crear orgranizacion con areas", async ({ page }) => {
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
    await page.getByLabel("Nombre de la organización").fill("organizacion100");
    await page.getByRole("button", { name: "Continuar" }).click();
    await page.getByRole("button", { name: "Agregar áreas" }).click();
    await page.locator('#modal_create_entity').getByRole('button', { name: '✕' }).click();
    });

test("5 crear orgranizacion con areas y miembros en la organizacion y en el area", async ({ page }) => {
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
  await page.getByLabel("Nombre de la organización").fill("organizacion100");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page.getByRole("button", { name: "Agregar áreas" }).click();
  await page.locator("#modal_create_entity").getByRole("img").nth(3).click();
  await page.locator("#modal_create_entity").getByPlaceholder("Buscar contacto").click();
  await page.locator("#modal_create_entity").getByPlaceholder("Buscar contacto").fill("mariel");
  await page.getByRole("button", { name: ".m .mariel2211 Cuenta: ." }).click();
  await page.locator("div").filter({ hasText: /^Administrador$/ }).getByRole("checkbox").check();
  await page.locator("div").filter({ hasText: /^Permitir asignar conversaciones de otros miembros$/ }).getByRole("checkbox").check();
  await page.locator("div").filter({hasText: /^Permitir la asignación automática entre conversaciones$/,}).getByRole("checkbox").check();
  await page.locator("div").filter({hasText:/^Crear mensajes de transmisión visible para todos los miembros$/,}).getByRole("checkbox").check();
  await page.getByRole("button", { name: "Agregar miembro" }).click();
  await page.locator("#add_member_organization_confirmation_modal").getByRole("button", { name: "Agregar" }).click();
  await page.locator("#modal_create_entity").getByRole("button", { name: "✕" }).click();
});

test("6 enviar mensaje", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.getByText('Mariel.mariel2211Hola buenas').click();
  await page.locator('.cs-message-input__content-editor').click();
  await page.locator('.cs-message-input__content-editor').fill('Hola buenas tardes');
  await page.locator('div:nth-child(3) > .cs-button').click();  
});

test("7 agregar contacto", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.locator(".drawer-content > .fill-white").click();
  await page.locator(".flex > div:nth-child(2) > button").first().click();
  await page.locator("#search_account_modal").getByPlaceholder("Buscar...").click();
  await page.locator("#search_account_modal").getByPlaceholder("Buscar...").fill("mauro");
  await page.locator("#accordion-collapse-contactlist-heading-01J5X6ZD11A3RKARVK4PHTTDAJ").getByRole("button").nth(1).click();
  await page.locator("#add_member_confirmation_modal").getByRole("button", { name: "Agregar" }).click();
  await page.locator("#search_account_modal").getByRole("button", { name: "✕" }).click();
});

test("8 correo incorrecto", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@gmail.com');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});
test('9 Debe repetir la contraseña', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@live.com.ar');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mar1');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mar1');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});

test("10 usuario ya creado", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('gustavo180591');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@gmail.com');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});
test("11 registrarse", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@live.com.ar');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.pause()
});

/* 1 login con correo v
2 login con usuario v
3 credencial invalida v
4 crear orgranizacion con areas v
5 crear orgranizacion con areas y miembros en la organizacion y en el area v
6 enviar mensaje v
7 agregar contacto v
8 correo incorrecto
9 contraseña con pocos caracteres
10 usuario ya creado
11 registrarse

*/


