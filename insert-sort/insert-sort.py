def insertSort(lst):
  for i in range(1, len(lst)):
    key = lst[i]
    j = i - 1
    while(j >= 0 and key < lst[j]):
      lst[j+1] = lst[j]
      j -= 1
    lst[j+1] = key

lst = [5,2,4,6,1,3]
insertSort(lst)
print(lst)