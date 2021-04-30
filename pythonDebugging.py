def bubble_sort(our_list):
    # We go through the list as many times as there are elements
    for i in range(len(our_list)):
        # We want the last pair of adjacent elements to be (n-2, n-1)
        for j in range(len(our_list) - 1):
            if our_list[j] > our_list[j+1]:
                # Swap
                our_list[j], our_list[j+1] = our_list[j+1], our_list[j]
                print(str(j)+"|"+str(j+1))
our_list = [256, 205, 188, 42, 244, 104, 207, 286, 29, 223, 241, 216, 293, 135, 115, 200, 90, 250, 231, 209, 37, 17, 189, 114, 92, 12, 297, 196, 37, 41, 149, 32, 135, 126, 114, 170, 12, 153, 301, 165, 31, 257, 226, 30, 152, 130, 171, 253, 82, 98, 214, 139, 174, 62, 1, 87, 224, 67, 259, 162]
bubble_sort(our_list)
print(our_list)