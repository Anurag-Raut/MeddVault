#include<stdio.h>
// #include<conio.h>
#include<stdlib.h>
struct pw
{
    double value;
    int i;
};
int main()
{
    int cap=9;
    int n;
    printf("Enter the number of items");
    scanf("%d",&n);
    int p[n];
    printf("Enter the elements/profit");
    for(int i=0;i<n;i++)
    {
        scanf("%d",&p[i]);
    }
    int w[n];
    printf("Enter the elements/weight");
    for(int i=0;i<n;i++)
    {
        scanf("%d",&w[i]);
    }
    struct pw pwarr[n];
    for(int i=0;i<n;i++)
    {
        struct pw* temp=(struct node*)malloc(sizeof(struct pw*));
        temp->value=p[i]/(double)w[i];
        
        temp->i=i;
        pwarr[i]=*temp;
    }
    struct pw* temp2=(struct node*)malloc(sizeof(struct pw*));
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(pwarr[i].value<pwarr[j].value)

            {
                *temp2=pwarr[i];
                pwarr[i]=pwarr[j];
                pwarr[j]=*temp2;
            }
        }
    }    
    
  
    int t=0;
    double anspro=0;
    while(cap>=0)
    {
        // printf("%d %d %d \n",cap,w[pwarr[t].i],anspro);
     if((cap-w[pwarr[t].i])>=0){
         
      anspro+=p[pwarr[t].i];
      cap-=w[pwarr[t].i];
      printf("%d %d\n",w[pwarr[t].i],cap);
      t++;

     }
     else
     {
         printf("%d %d\n",w[pwarr[t].i],cap);
         int rem=w[pwarr[t].i]-cap;
         printf("\n %d       ",rem);
        //  int w=w[pwarr[t].i];
         double a=(cap/(double)w[pwarr[t].i])*(double)p[pwarr[t].i];
         anspro+=a;
         break;
     }
    }
    printf("%f",anspro);       
}
