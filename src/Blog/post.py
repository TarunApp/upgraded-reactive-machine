import os
import json

files = os.listdir()
mdx = list(filter(lambda item: '.mdx' in item, files))
mdx = ['Post.mdx','First.mdx']


bigstring = """
"""

for i in mdx:
	bigstring = bigstring + "import {} from '!babel-loader!@mdx-js/loader!./{}.mdx'".format(i.split('.')[0],i.split('.')[0]) + "\n"

posts = []
for i in mdx:
	posts.append("{name: " + '"{}"'.format(i.split(".")[0]) + "," + "content: " + i.split(".")[0] + "}".strip("'"))
	# m = {'name': i.split(".mdx")[0], 'content': i.split(".mdx")[0]}
	# posts.append(m)

s = """"""
for i in posts:
	s = s + i + ", "
js = "let posts = " + s
print(type(js))
with open('testpost.js', 'w') as filewrite:
	filewrite.write(js)
