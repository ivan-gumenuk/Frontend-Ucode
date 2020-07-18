ls -lh $1 | awk 'FNR > 1 {print $9 " " $5}'
