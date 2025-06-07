# Babynama – Webinars Page

This is a simple Next.js page that shows upcoming webinars for new and expecting parents. Built as part of a feature to help users quickly browse Babynama’s live sessions.

---

## 🔗 Live URL
https://babynama-webinar.vercel.app/
---

## ⚙️ Choices Made

I created a separate `WebinarCard` component to keep the code modular and clean. It helped in reusing the card structure and isolating UI logic like modals and event handling. Also to make it more beautifyl I choose to create the relevant images using the AI which are then stored in the public folder (alternatively we can store the image link to db and can fetch from there).Along with a modal popup for details instead of navigating to a new page so that users don’t lose their current view and can close it quickly.



---

## 🧠 Roadblock & Learning

At first, I was confused about how to pass `id` to the button’s `onClick` and log it properly. I was trying to return the index with the map function but that was not working well so I ended up revisiting the code and mention the id in the arrray itself which was carrying the data of the webinars




## 📱 Preview
![image](https://github.com/user-attachments/assets/9b872ae1-d487-4a7a-8710-f2676aac1eb1)
