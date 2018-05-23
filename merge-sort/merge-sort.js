function merge(A, p, q, r) {
  let i;
  let j;
  let k;
  const L = [];
  const R = [];
  const n1 = (q - p) + 1;
  const n2 = r - q;
  for (i = 0; i < n1; i += 1) {
    L[i] = A[p + i];
  }
  for (j = 0; j < n2; j += 1) {
    R[j] = A[q + j + 1];
  }
  L[n1] = Infinity;
  R[n2] = Infinity;
  i = 0;
  j = 0;
  for (k = p; k <= r; k += 1) {
    if (L[i] < R[j]) {
      A[k] = L[i];
      i += 1;
    } else {
      A[k] = R[j];
      j += 1;
    }
  }
}

function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

module.exports = mergeSort;
