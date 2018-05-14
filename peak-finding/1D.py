import random

def generateList(len):
  return [random.randint(1, 10) for x in range(1,len + 1)]

def peakFindingSlow(lst):
  length = len(lst)
  if (length == 1 or lst[0] > lst[1]):
    return { 'index':0, 'value':lst[0] }
  if (lst[length-1] > lst[length-2]):
    return { 'index':length-1, 'value':lst[length-1] }
  for i in range(1, length-1):
    if (lst[i] > lst[i-1] and lst[i] > lst[i+1]):
      return { 'index':i, 'value':lst[i] }

def peakFindingFast(lst, start, end):
  half_length = (end - start) / 2
  if (lst[half_length] > lst[half_length - 1] and
    lst[half_length] > lst[half_length + 1]):
    return { 'index':half_length, 'value':lst[half_length] }
  if (lst[half_length] < lst[half_length - 1]):
    return peakFindingFast(lst, start, half_length)
  else:
    return peakFindingFast(lst, half_length, end)

lst = generateList(10)
print(lst)
peak = peakFindingSlow(lst)
print('Peak finding slow:', peak)
peak = peakFindingFast(lst, 0, len(lst))
print('Peak finding fast:', peak)
