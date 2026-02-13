#  Instrucciones de Despliegue - Sitio Web Trexan

##  IMPORTANTE: NO usar Application Manager de cPanel
Usar SSH Terminal únicamente.

---

## PASOS RÁPIDOS

### 1. Subir Archivos
- cPanel → File Manager → `/home/humanlog/webapps/rbweb/`
- Subir `trexan-production.zip` y extraer
- Eliminar el .zip después

### 2. Conectar por SSH
```bash
ssh humanlog@servidor.com
cd /home/humanlog/webapps/rbweb
```

### 3. Configurar Ambiente
```bash
mv .env.production .env
cp .env .env.backup  # Respaldo
```

### 4. Instalar Dependencias
```bash
/opt/cpanel/ea-nodejs22/bin/npm ci
```

### 5. Generar Base de Datos
```bash
NODE_ENV=production /opt/cpanel/ea-nodejs22/bin/npx prisma generate
```

### 6. Compilar
```bash
chmod +x build-production.sh
./build-production.sh
```

### 7. Iniciar con PM2
```bash
/opt/cpanel/ea-nodejs22/bin/npm install -g pm2
pm2 start .next/standalone/server.js --name "trexan-website"
pm2 save
pm2 startup  # Copiar y ejecutar el comando que muestra
```

### 8. Configurar Proxy
Crear `/home/humanlog/public_html/.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?recibasicos\.com$ [NC]
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

---

##  SOLUCIÓN DE PROBLEMAS

### Si npm install falla:
```bash
/opt/cpanel/ea-nodejs22/bin/npm install --legacy-peer-deps
```

### Si prisma generate falla:
```bash
NODE_ENV=production /opt/cpanel/ea-nodejs22/bin/npx prisma generate --schema=./prisma/schema.prisma
```

### Si la compilación falla:
```bash
rm -rf .next
./build-production.sh
```

### Si el puerto 3000 está ocupado:
```bash
lsof -i :3000
kill -9 
# O usar otro puerto:
PORT=8080 pm2 start .next/standalone/server.js --name "trexan-website"
```

### Si las imágenes no cargan:
```bash
cp -r public .next/standalone/
pm2 restart trexan-website
```

---

##  COMANDOS ÚTILES PM2
```bash
pm2 status                    # Ver estado
pm2 logs trexan-website       # Ver logs
pm2 restart trexan-website    # Reiniciar
pm2 stop trexan-website       # Detener
pm2 monit                     # Monitor CPU/RAM
```

---

##  ACTUALIZAR LA APP
```bash
pm2 stop trexan-website
cp .env .env.backup
# [subir nuevo zip y extraer]
cp .env.backup .env
/opt/cpanel/ea-nodejs22/bin/npm ci
NODE_ENV=production /opt/cpanel/ea-nodejs22/bin/npx prisma generate
./build-production.sh
pm2 restart trexan-website
```

---

##  VERIFICACIÓN FINAL

- [ ] `pm2 status` → app "online"
- [ ] `pm2 logs trexan-website` → sin errores
- [ ] Sitio carga en https://recibasicos.com
- [ ] Imágenes se muestran
- [ ] Formulario de contacto funciona

---

##  SOPORTE

**Desarrollador:** ernesto.soto@trexan.co
**Puerto:** 3000 (configurar proxy a este puerto)
**DB Password:** C7U&9dHpr3

---

##  CREDENCIALES

Base de datos:
- Host: 50.6.171.43
- Usuario: humanlog_rb
- Password: C7U&9dHpr3
- Database: humanlog_rbcontacts

Todo está configurado en el archivo `.env`