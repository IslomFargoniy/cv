# Deploy Qo'llanmasi (cv.faith.uz)

Ushbu qo'llanma **Islombek Abdurahman Portfolio (CV)** loyihasini ishlab chiqarish (production) serveriga yuklash va yangilash bo'yicha ko'rsatmalarni o'z ichiga oladi.

---

## 📌 Server Ma'lumotlari

- **Server IP:** `193.180.213.188`
- **Domen:** `https://cv.faith.uz`
- **SSH Host (config bo'yicha):** `younine-root` yoki `root@193.180.213.188`
- **Veb-sayt ildiz katalogi (Web Root):** `/var/www/cv_faith_uz_usr/data/www/cv.faith.uz`
- **Serverdagi manba kodi katalogi (Git Repo):** `/var/www/cv_faith_uz_usr/data/cv`
- **Foydalanuvchi va guruh:** `cv_faith_uz_usr:cv_faith_uz_usr`

---

## 🚀 1-usul: Lokal Kompyuterdan Tezkor Deploy (Tavsiya etiladi)

Lokal kompyuteringizdagi `Desktop/myProjects/cv` katalogida turib, loyihani build qiling va serverga rsync orqali yuklang:

```bash
# 1. Loyihani build qilish
npm run build

# 2. Yangi build fayllarini serverga yuborish
rsync -avz --delete build/ younine-root:/var/www/cv_faith_uz_usr/data/www/cv.faith.uz/

# 3. Serverdagi fayllarga ruxsatlarni to'g'rilash
ssh younine-root "chown -R cv_faith_uz_usr:cv_faith_uz_usr /var/www/cv_faith_uz_usr/data/www/cv.faith.uz && chmod -R 755 /var/www/cv_faith_uz_usr/data/www/cv.faith.uz"
```

### ⚡️ Bitta buyruq bilan deploy qilish:
```bash
npm run build && rsync -avz --delete build/ younine-root:/var/www/cv_faith_uz_usr/data/www/cv.faith.uz/ && ssh younine-root "chown -R cv_faith_uz_usr:cv_faith_uz_usr /var/www/cv_faith_uz_usr/data/www/cv.faith.uz && chmod -R 755 /var/www/cv_faith_uz_usr/data/www/cv.faith.uz"
```

---

## 🖥 2-usul: Serverning O'zida Yangilash (Git orqali)

Agar serverga SSH orqali kirgan holda to'g'ridan-to'g'ri yangilamoqchi bo'lsangiz:

```bash
# 1. Serverga ulanish
ssh younine-root

# 2. Manba kodi katalogiga o'tish va yangilanishlarni olish
cd /var/www/cv_faith_uz_usr/data/cv
git pull origin main

# 3. Bog'liqliklarni o'rnatish va build qilish
npm install
npm run build

# 4. Yangi build fayllarini veb-sayt katalogiga ko'chirish
rsync -avz --delete build/ /var/www/cv_faith_uz_usr/data/www/cv.faith.uz/

# 5. Huquqlarni sozlash
chown -R cv_faith_uz_usr:cv_faith_uz_usr /var/www/cv_faith_uz_usr/data/www/cv.faith.uz
chmod -R 755 /var/www/cv_faith_uz_usr/data/www/cv.faith.uz
```

---

## 🔍 Tekshirish va Foydali Buyruqlar

### Sayt ishlashini tekshirish:
```bash
curl -IL https://cv.faith.uz
```

### Nginx xatolar logini kuzatish:
```bash
ssh younine-root "tail -f /var/www/cv_faith_uz_usr/data/logs/cv.faith.uz-frontend.error.log"
```

### Nginx kirishlar (access) logini kuzatish:
```bash
ssh younine-root "tail -f /var/www/cv_faith_uz_usr/data/logs/cv.faith.uz-frontend.access.log"
```
