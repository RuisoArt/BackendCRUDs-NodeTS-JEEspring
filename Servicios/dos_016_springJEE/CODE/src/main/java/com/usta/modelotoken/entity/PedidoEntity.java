package com.usta.modelotoken.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "pedido")

public class PedidoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private long idPedido;

    @Column(name = "numero_pedido")
    private String numeroPedido;

    @Column(name = "descripcion")
    private String descripcion;

    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProductoEntity idProductoFK;

    public PedidoEntity(){

    }
    public PedidoEntity(long idPedido, String numeroPedido, String descripcion, ProductoEntity idProductoFK) {
        this.idPedido = idPedido;
        this.numeroPedido = numeroPedido;
        this.descripcion = descripcion;
        this.idProductoFK = idProductoFK;
    }

    public long getIdPedido() {        return idPedido;    }
    public void setIdPedido(long idPedido) {        this.idPedido = idPedido;    }

    public String getNumeroPedido() {        return numeroPedido;    }
    public void setNumeroPedido(String numeroPedido) {        this.numeroPedido = numeroPedido;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }

    public ProductoEntity getIdProductoFK() {        return idProductoFK;    }
    public void setIdProductoFK(ProductoEntity idProductoFK) {        this.idProductoFK = idProductoFK;    }
}
