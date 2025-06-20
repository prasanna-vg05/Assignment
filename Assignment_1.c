#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node *next;
};


struct node * createNode(int data){
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}


void insertAtEnd(struct node** head, int data)
{
        struct node* newNode = createNode(data);
        if(*head == NULL){
            *head = newNode;
            return ;
        }
        struct node *temp = *head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = newNode;        
}

void insertAtBegining(struct node **head, int data)
{
   struct node *newNode = createNode(data);
   newNode -> next = *head;
   *head = newNode;
}

void insertAtAny(struct node **head, int data, int pos){
    if(pos==1){
        insertAtBegining(head, data);
        return;
    }

    struct node *newNode = createNode(data);
    struct node *temp = *head;

    for(int i=0;i<pos-1 && temp != NULL; i++){
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Position out of bounds!\n");
        free(newNode); 
        return;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    
}

int getSize(struct node* head) {
    int count = 0;
    struct node* current = head;

    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}

void deleteAtBegining(struct node **head){
    if (*head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct node *temp = *head;
    temp = temp->next;
    *head = temp;

}

void deleteAtAny(struct node **head, int pos)
{
        if(pos==1){
            deleteAtBegining(head);
            return;
        }
        struct node *temp = *head,*prev=NULL;
        for(int i=0;i<pos-1 && temp != NULL;i++){
            prev = temp;
            temp = temp->next;
        }
        if(temp == NULL){
            printf("Position out of bounds!\n");
            return;
        }
        prev->next = temp->next;
        free(temp);
}


int searchData(struct node *head, int data){
    struct node *temp = head;
    int count=0;
    while(temp!=NULL){
        if (temp->data == data){
            return count;
        }
        count++;
        temp = temp->next;
    }
    return -1;
}

void printList(struct node * head)
{
    struct node * temp = head;
    while (temp!=NULL)
    {
        if(temp->next == NULL){
            printf("%d ", temp->data);
            break;
        }
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    
    
}


int main(){
    struct node *head = NULL;
    int option;
    do {
        printf("\nMenu:\n");
        printf("1. Insert values at the end\n");
        printf("2. Print list\n");
        printf("3. Insert values at the begining\n");
        printf("4. Insert value at a specific position\n");
        printf("5. Delete value at the Begining\n");
        printf("6. Delete value at a specific position\n");
        printf("7. Search data by value\n");
        printf("0. Exit\n");
        printf("Enter option    : ");
        scanf("%d", &option);

        switch (option) {
            case 1: {
                int n;
                printf("Enter number of values to insert: ");
                scanf("%d", &n);
                for (int i = 0; i < n; i++) {
                    int val;
                    printf("Enter data value: ");
                    scanf("%d", &val);
                    insertAtEnd(&head, val);
                }
                break;
            }
            case 2:
                printList(head);
                break;
            case 3:
                int data;
                printf("Enter data value: ");
                scanf("%d", &data);
                insertAtBegining(&head, data);
                break;
            case 4:
                int  pos;
                printf("Enter the position: ");
                scanf("%d",&pos);
                 if(pos<1 || pos > getSize(head)){
                    printf("Invalid position!\n");
                    break;
                }
                printf("Enter data value: ");
                scanf("%d",&data);
                insertAtAny(&head,data,pos);
                break;
            case 5:
                deleteAtBegining(&head);
                break;
            case 6:
                printf("Enter the position to delete: ");
                scanf("%d", &pos);
                if (pos < 1 || pos > getSize(head)) {
                    printf("Invalid position!\n");
                    break;
                }
                deleteAtAny(&head, pos);
                break;
            case 7:
                printf("Enter the data to search in position : ");
                scanf("%d",&data);
                int result = searchData(head, data);
                if (result != -1)
                    printf("Data %d found at position %d\n", data, result);
                else
                    printf("Data %d not found in the list.\n", data);
                break;
            case 0: 
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid option! Try again.\n");
        }
    } while (option != 0);

    return 0;
}