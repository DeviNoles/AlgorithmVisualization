def bubbleSort( ar ):
    n = len( ar )

    for i in range( n - 1 ) :
        flag = 0

        for j in range(n - 1) :
            
            if ar[j] > ar[j + 1] : 
                holder = ar[j]
                ar[j] = ar[j + 1]
                ar[j + 1] = holder
                flag = 1

        if flag == 0:
            break

    return ar

el = [21,6,9,33,3] 

result = bubbleSort(el)

print (result)