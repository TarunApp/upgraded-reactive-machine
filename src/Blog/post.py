import os
import json

files = os.listdir()
mdx = list(filter(lambda item: '.mdx' in item, files))


bigstring = """
"""

for i in mdx:
	bigstring = bigstring + "import {} from '!babel-loader!@mdx-js/loader!./{}.mdx'".format(i.split('.')[0],i.split('.')[0]) + "\n"

posts = []
s = """"""
for i in mdx:
	jsmdx = "{name: " + '"{}"'.format(i.split(".")[0]) + "," + "content: " + i.split(".")[0] + "}".strip("'")
	s = s + jsmdx + ","
	# m = {'name': i.split(".mdx")[0], 'content': i.split(".mdx")[0]}
	# posts.append(m)


# s = """"""
# for i in posts:
# 	s = s + i + ", "
# js = "let posts = " + "[" +  s + "]"
# print(js)
s = "let posts = " + "[" + s + "]" + "\n"
with open('Posts.js', 'w') as filewrite:
	filewrite.write("""/* eslint-disable import/no-webpack-loader-syntax */ \n{} \n{} \nexport default posts""".format(bigstring, s))			
