puts "seeding data ..........................."

john = Customer.create!(name: "John", email: "john@gmail.com", password: "doe", password_confirmation: "doe")
john.search_histories.create(title:"tv")
john.search_histories.create(title:"iphone")
john.search_histories.create(title:"samsung")
john.search_histories.create(title:"ipad")

maggie = Customer.create!(name: "Maggie", email: "maggie@gmail.com", password: "doe", password_confirmation: "doe")
maggie.search_histories.create(title:"samsung")
maggie.search_histories.create(title:"cuttlery")
maggie.search_histories.create(title:"lip balm")

Fashion.create(name: "t-shirt", image: "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "dress", image: "https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "shirt", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "suit", image: "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "jeans", image: "https://images.unsplash.com/photo-1615791966365-92f425a37a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80")
Fashion.create(name: "hoodie", image: "https://images.unsplash.com/photo-1554967769-1f961137e9c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")
Fashion.create(name: "pants", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "socks", image: "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")
Fashion.create(name: "tracksuit", image: "https://images.unsplash.com/photo-1540254597053-3901b858d40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "sweater", image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "coat", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Fashion.create(name: "sweatshirt", image: "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")

Electronic.create(name: "iphone", image: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")
Electronic.create(name: "ipad", image: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Electronic.create(name: "headphones", image: "https://images.unsplash.com/photo-1624814448280-0f2d7d399b07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80")
Electronic.create(name: "macbook", image: "https://images.unsplash.com/photo-1522169799806-79cb544552bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80")
Electronic.create(name: "lenovo", image: "https://nairobicomputershop.co.ke/media/cache/4a/19/4a195045b795cf8ea41d37c3b02bce93.jpg")
Electronic.create(name: "smartphone", image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Electronic.create(name: "speakers", image: "https://images.unsplash.com/photo-1614755192999-b8ecede15458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")
Electronic.create(name: "earphones", image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80")
Electronic.create(name: "tv", image: "https://jambopay.market/image/cache/catalog/Seller_1322/TVS/1-20230405125552-550x550h.jpeg")
Electronic.create(name: "earpods", image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Electronic.create(name: "microphones", image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Electronic.create(name: "camera", image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Electronic.create(name: "drone", image: "https://images.unsplash.com/photo-1487219116710-23ffcb172b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=806&q=80")

Deal.create(name: "samsung galaxy", image: "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80")
Deal.create(name: "vitron", image: "https://images.yaoota.com/IC4ZyoD1XU0jG_N5wPQifxSbO_8=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/5abac30c662d8b92ae488e26358fbab0839a5784.jpg")
Deal.create(name: "nivea", image: "https://images.unsplash.com/photo-1632221522690-6a0c04bf6f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Deal.create(name: "nike", image: "https://images.unsplash.com/photo-1613489647684-4dc8c9948245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80")
Deal.create(name: "rollerskates", image: "https://images.unsplash.com/photo-1691109839715-b0170a8aa985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")
Deal.create(name: "dumbbells", image: "https://plus.unsplash.com/premium_photo-1664536968460-738ba488545e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Deal.create(name: "heels", image: "https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")
Deal.create(name: "gaming mouse", image: "https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")
Deal.create(name: "gaming laptop", image: "https://nairobicomputershop.co.ke/media/cache/30/59/3059729ea5192e8b5b2a475a3711ccbc.jpg")
Deal.create(name: "scarf", image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")
Deal.create(name: "yoga mat", image: "https://images.unsplash.com/photo-1621886178958-be42369fc9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80")
Deal.create(name: "3D glasses", image: "https://images.unsplash.com/photo-1604257206125-c0d204cb1493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80")
Deal.create(name: "rolex", image: "https://images.unsplash.com/photo-1619976442556-210d9a914669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80")

HomeProduct.create(name: "toys", image: "https://st2.depositphotos.com/1063437/43173/i/600/depositphotos_431738448-stock-photo-colorful-plastic-toys-children-room.jpg")
HomeProduct.create(name: "fashion", image: "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_640.jpg")
HomeProduct.create(name: "dining", image: "https://c1.wallpaperflare.com/preview/954/460/914/glass-table-white-formal.jpg")
HomeProduct.create(name: "health", image: "https://medschool.uniroma2.it/wp-content/uploads/2016/03/hc-blog.jpg")
HomeProduct.create(name: "fitness", image: "https://t3.ftcdn.net/jpg/04/31/55/92/360_F_431559277_rkkDdPgYlypnPwf4EoDIlvkVDiWNBBft.jpg")
HomeProduct.create(name: "playstation", image: "https://cdn.wallpapersafari.com/31/20/rgilqH.jpg")
HomeProduct.create(name: "snacks", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2tzfGVufDB8fDB8fHww&w=1000&q=80")
HomeProduct.create(name: "groceries", image: "https://png.pngtree.com/thumb_back/fh260/background/20230424/pngtree-full-grocery-store-display-full-of-different-types-of-fruits-and-image_2558583.png")
HomeProduct.create(name: "cosmetics", image: "https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg")

puts '..................... done seeding!'