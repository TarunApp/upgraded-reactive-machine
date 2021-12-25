python src/Blog/post.py
npm run build #Build First
cd build
cp -r * ../../Tarunapp.github.io
cd ../../Tarunapp.github.io
git add .
git commit -m "Updated Site"
git push origin master
