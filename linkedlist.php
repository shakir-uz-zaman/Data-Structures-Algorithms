<?php 

    class Node{
        private $data;
        private $next;

        public function __construct()
        {
            $this->data = 0;
            $this->next = null;
        }

    
        public function setData($data)
        {
            $this->data = $data;
        }
        public function getData()
        {
            return $this->data;
        }
        public function getNext()
        {
            return $this->next;
        }
        public function setNext($next)
        {
            $this->next = $next;
        }

    }
    class LinkedList{
        private $head;
        private $size;
        public function __construct()
        {
            $this->head =null;
            $this->size=0;
        }
        //public function insertAtFront($data): void {
        public function insertAtFront($data) {
          if($this->head)
          {
            $newNode = new Node();
            
          }
          else
          {
            $newNode = new Node();
			$newNode->setData($data);
			$this->head = $newNode;
          }
        }
        public function getSize()
        {
            return $this->size;
        }

    }

    $lone = new LinkedList();

    var_dump($lone->insertAtFront(20));
    $size = $lone->getSize();
    echo ($size);

?>
