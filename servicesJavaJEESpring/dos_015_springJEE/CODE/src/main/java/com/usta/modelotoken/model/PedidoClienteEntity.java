package com.usta.modelotoken.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "pedido_cliente")

public class PedidoClienteEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido_cliente")
    private long idPedidoCliente;

    @JoinColumn(name = "id_pedido", referencedColumnName = "id_pedido")
    @ManyToOne(fetch =FetchType.EAGER)
    private PedidoEntity idPedidoFK;

    @JoinColumn(name = "id_cliente", referencedColumnName="id_cliente")
    @ManyToOne(fetch =FetchType.EAGER)
    private ClienteEntity idClienteFK;

    @Column(name = "descripcion")
    private String descripcion;

    public PedidoClienteEntity(){

    }

    public PedidoClienteEntity(long idPedidoCliente, PedidoEntity idPedidoFK, ClienteEntity idClienteFK, String descripcion) {
        this.idPedidoCliente = idPedidoCliente;
        this.idPedidoFK = idPedidoFK;
        this.idClienteFK = idClienteFK;
        this.descripcion = descripcion;
    }

    public long getIdPedidoCliente() {        return idPedidoCliente;    }
    public void setIdPedidoCliente(long idPedidoCliente) {        this.idPedidoCliente = idPedidoCliente;    }

    public PedidoEntity getIdPedidoFK() {        return idPedidoFK;    }
    public void setIdPedidoFK(PedidoEntity idPedidoFK) {        this.idPedidoFK = idPedidoFK;    }

    public ClienteEntity getIdClienteFK() {        return idClienteFK;    }
    public void setIdClienteFK(ClienteEntity idClienteFK) {        this.idClienteFK = idClienteFK;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }
}
