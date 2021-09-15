# import os
# import time

# files = os.listdir('Posts')
# mdx = list(filter(lambda item: '.mdx' in item, files))
# print(mdx)

# file = 'post.py'
# print("Last modification time: %s" % time.ctime(os.path.getmtime(file)))
# print("Last metadata change time or path creation time: %s" % time.ctime(os.path.getctime(file)) )



# e = os.path.getctime('Posts/' + "Start.mdx")
# print(" ".join(time.ctime(e).split(" ")[1:3]), time.ctime(e).split(" ")[4])